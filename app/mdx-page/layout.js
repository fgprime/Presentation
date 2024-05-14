import style from "./mdxlayout.module.css";

export default function MdxLayout({ children }) {
  // Create any shared layout or styles here

  return (
    <div style={{}} className="h-screen text-red-50" id={style.markdownLayout}>
      {children}
    </div>
  );
}
