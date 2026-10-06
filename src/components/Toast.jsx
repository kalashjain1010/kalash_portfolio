import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (message, tone = "info", duration = 4200) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, tone }]);
      if (duration > 0) {
        window.setTimeout(() => dismiss(id), duration);
      }
      return id;
    },
    [dismiss]
  );

  const api = useMemo(
    () => ({
      push,
      success: (message, duration) => push(message, "success", duration),
      error: (message, duration) => push(message, "error", duration),
      info: (message, duration) => push(message, "info", duration),
      dismiss,
    }),
    [push, dismiss]
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      {typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed z-[100] bottom-5 right-5 left-5 sm:left-auto flex flex-col gap-2 pointer-events-none items-stretch sm:items-end max-w-md sm:max-w-sm mx-auto sm:mx-0"
              aria-live="polite"
              aria-relevant="additions"
            >
              {toasts.map((t) => (
                <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
              ))}
            </div>,
            document.body
          )
        : null}
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const tone =
    toast.tone === "success"
      ? "border-accent/40 bg-bg-card text-text-primary shadow-glow"
      : toast.tone === "error"
        ? "border-amber-400/40 bg-bg-card text-text-primary"
        : "border-white/10 bg-bg-card text-text-primary";

  const label =
    toast.tone === "success"
      ? "Success"
      : toast.tone === "error"
        ? "Error"
        : "Info";

  return (
    <div
      role="status"
      className={`pointer-events-auto w-full rounded-2xl border px-4 py-3 backdrop-blur-md transition-all duration-300 ${tone} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted font-medium">
            {label}
          </p>
          <p className="font-body text-sm mt-1 leading-relaxed break-words">
            {toast.message}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="shrink-0 text-text-muted hover:text-text-primary transition-colors p-1 -mr-1"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
