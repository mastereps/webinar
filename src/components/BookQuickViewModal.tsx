import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Book from "../entities/Book";
import { formatPrice } from "../utils/formatPrice";

type Props = {
  open: boolean;
  book: Book | null;
  loading: boolean;
  error: string | null;
  onClose: () => void;
};

const clampQuantity = (value: number) => Math.min(99, Math.max(1, value));

const BookQuickViewModal = ({ open, book, loading, error, onClose }: Props) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (open) setQuantity(1);
  }, [open, book?.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const imageUrl = book?.images?.[0] || book?.cover_image_url;
  const description = book?.short_description || book?.details;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-white text-black shadow-2xl dark:bg-[#1a1a1a] dark:text-white"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute cursor-pointer right-4 top-4 text-2xl leading-none text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          ×
        </button>

        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={book?.title || "Book cover"}
                className="h-56 w-56 object-contain"
              />
            ) : (
              <div className="flex h-56 w-56 items-center justify-center rounded bg-slate-100 text-sm text-slate-500 dark:bg-[#111] dark:text-slate-400">
                No image
              </div>
            )}
          </div>

          <div className="space-y-3 p-8">
            {loading && <p className="text-sm text-slate-500">Loading...</p>}
            {error && <p className="text-sm text-red-500">{error}</p>}
            {!loading && !error && book && (
              <>
                <div>
                  <h3 className="text-2xl font-heading uppercase">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-lantern">
                    {formatPrice(book.price_cents, book.currency)}
                  </p>
                </div>
                {description && (
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                )}
                <div className="pt-4">
                  <Link
                    to={`/products/${book.slug}`}
                    className=" underline text-sm  tracking-[0.08em] text-white hover:brightness-110"
                    onClick={onClose}
                  >
                    View details
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="mb-2    text-slate-500 dark:text-slate-400">
                    Quantity
                  </p>
                  <div className="inline-flex items-center gap-2 rounded border border-slate-300 px-2 py-1 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => clampQuantity(prev - 1))
                      }
                      disabled={quantity <= 1}
                      className={`h-8 w-8 rounded text-lg text-slate-700 dark:text-slate-200 ${
                        quantity <= 1
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(
                          clampQuantity(Number(event.target.value || 1))
                        )
                      }
                      className="h-8 w-12 bg-transparent text-center text-sm outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => clampQuantity(prev + 1))
                      }
                      className="h-8 cursor-pointer w-8 rounded text-lg text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookQuickViewModal;
