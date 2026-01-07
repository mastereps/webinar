-- Seed data for books and related tables.
-- Image URLs assume you copied the book images to webinar/public/images/.
-- Example: webinar/src/assets/images/bb_pathwaytoproficientreader.png -> webinar/public/images/bb_pathwaytoproficientreader.png

WITH book_data AS (
  SELECT *
  FROM (
    VALUES
      (
        'pathways-to-proficient-readers',
        'Pathways to Proficient Readers',
        20000,
        'PHP',
        '/images/bb_pathwaytoproficientreader.png',
        'Strategies for building confident, independent readers in the classroom.',
        'A practical guide for literacy instruction with classroom-ready routines, assessment tips, and reading interventions for diverse learners.'
      ),
      (
        'beyond-worksheets-in-esl-teaching',
        'Beyond Worksheets in ESL Teaching',
        40000,
        'PHP',
        '/images/bb_beyondworsheet.png',
        'Hands-on ESL activities that move beyond worksheets and boost engagement.',
        'Explore communicative tasks, project-based learning, and real-world language practice for stronger ESL outcomes.'
      ),
      (
        'metacognitive-strategy-use-and-curriculum-design',
        'Metacognitive Strategy Use and Curriculum Design',
        240000,
        'PHP',
        '/images/bb_metacognitiv.png',
        'Curriculum design focused on metacognition and self-regulated learning.',
        'Learn how to embed thinking routines, reflection cycles, and goal-setting to improve student performance across subjects.'
      ),
      (
        'beyond-the-ordeal-book-of-poems',
        'Beyond the Ordeal: Book of Poems',
        29000,
        'PHP',
        '/images/bb_beyondordea.png',
        'A poetic collection exploring resilience, memory, and quiet triumphs.',
        'An accessible set of poems for readers and classrooms, with themes suited for reflection and discussion.'
      ),
      (
        'the-reflective-teacher-in-the-classroom',
        'The Reflective Teacher in the Classroom',
        49900,
        'PHP',
        '/images/bb_thereflectiveteacherinclassroo.png',
        'A guide to reflective practice for continual improvement in teaching.',
        'Build habits of inquiry, feedback, and lesson analysis to refine instruction and support student growth.'
      ),
      (
        'tome-of-knowledge',
        'Tome of Knowledge',
        29000,
        'PHP',
        '/images/book_red.png',
        'Reference material designed for professional learning and quick lookup.',
        'A concise reference for educators covering classroom planning, assessment, and research-based best practices.'
      ),
      (
        'tome-of-wisdom',
        'Tome of Wisdom',
        49900,
        'PHP',
        '/images/book_purple.png',
        'A companion volume focused on leadership, reflection, and practice.',
        'A curated collection of insights for educators seeking to deepen their craft and professional growth.'
      )
  ) AS t(
    slug,
    title,
    price_cents,
    currency,
    cover_image_url,
    short_description,
    details
  )
)
INSERT INTO books (
  slug,
  title,
  price_cents,
  currency,
  cover_image_url,
  short_description,
  details,
  is_active
)
SELECT
  slug,
  title,
  price_cents,
  currency,
  cover_image_url,
  short_description,
  details,
  true
FROM book_data
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  price_cents = EXCLUDED.price_cents,
  currency = EXCLUDED.currency,
  cover_image_url = EXCLUDED.cover_image_url,
  short_description = EXCLUDED.short_description,
  details = EXCLUDED.details,
  is_active = true;

INSERT INTO categories (name, slug)
VALUES
  ('Teaching', 'teaching'),
  ('ESL', 'esl'),
  ('Curriculum', 'curriculum'),
  ('Poetry', 'poetry'),
  ('Professional Development', 'professional-development'),
  ('Reference', 'reference')
ON CONFLICT (slug) DO UPDATE
SET name = EXCLUDED.name;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'teaching'
WHERE b.slug IN (
  'pathways-to-proficient-readers',
  'beyond-worksheets-in-esl-teaching',
  'metacognitive-strategy-use-and-curriculum-design',
  'the-reflective-teacher-in-the-classroom'
)
ON CONFLICT DO NOTHING;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'esl'
WHERE b.slug = 'beyond-worksheets-in-esl-teaching'
ON CONFLICT DO NOTHING;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'curriculum'
WHERE b.slug IN (
  'pathways-to-proficient-readers',
  'metacognitive-strategy-use-and-curriculum-design'
)
ON CONFLICT DO NOTHING;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'poetry'
WHERE b.slug = 'beyond-the-ordeal-book-of-poems'
ON CONFLICT DO NOTHING;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'professional-development'
WHERE b.slug = 'the-reflective-teacher-in-the-classroom'
ON CONFLICT DO NOTHING;

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
JOIN categories c ON c.slug = 'reference'
WHERE b.slug IN ('tome-of-knowledge', 'tome-of-wisdom')
ON CONFLICT DO NOTHING;

DELETE FROM book_images
WHERE book_id IN (
  SELECT id
  FROM books
  WHERE slug IN (
    'pathways-to-proficient-readers',
    'beyond-worksheets-in-esl-teaching',
    'metacognitive-strategy-use-and-curriculum-design',
    'beyond-the-ordeal-book-of-poems',
    'the-reflective-teacher-in-the-classroom',
    'tome-of-knowledge',
    'tome-of-wisdom'
  )
);

INSERT INTO book_images (book_id, image_url, sort_order)
SELECT b.id, b.cover_image_url, 0
FROM books b
WHERE b.slug IN (
  'pathways-to-proficient-readers',
  'beyond-worksheets-in-esl-teaching',
  'metacognitive-strategy-use-and-curriculum-design',
  'beyond-the-ordeal-book-of-poems',
  'the-reflective-teacher-in-the-classroom',
  'tome-of-knowledge',
  'tome-of-wisdom'
);
