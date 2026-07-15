"use client";

import { useEffect, useRef } from "react";

export default function BlogContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const headings = Array.from(el.querySelectorAll("h2"));

    headings.forEach((heading) => {
      const headingText = heading.textContent?.toLowerCase() ?? "";
      const isQaSection =
        headingText.includes("question") ||
        headingText.includes("faq") ||
        headingText.includes("asked");

      if (!isQaSection) return;

      // Collect siblings until next H2
      const siblings: Element[] = [];
      let next = heading.nextElementSibling;
      while (next && next.tagName !== "H2") {
        siblings.push(next);
        next = next.nextElementSibling;
      }

      siblings.forEach((p) => {
        if (p.tagName !== "P") return;
        if (p.closest(".blog-qa-item")) return;

        const strong = p.querySelector("strong");
        if (!strong) return;

        const questionText = strong.textContent?.trim() ?? "";
        if (!questionText.endsWith("?")) return;

        const card = document.createElement("div");
        card.className = "blog-qa-item";

        const qDiv = document.createElement("div");
        qDiv.className = "blog-qa-q";
        qDiv.textContent = questionText;

        const aDiv = document.createElement("div");
        aDiv.className = "blog-qa-a";

        // Pattern 1: question and answer are in the SAME <p> tag
        // e.g. <p><strong>Q?</strong>\nAnswer text here.</p>
        const fullText = p.innerHTML;
        const afterStrong = fullText
          .replace(/<strong>[^<]*<\/strong>/, "")
          .replace(/^\s*<br\s*\/?>\s*/i, "")
          .trim();

        if (afterStrong.length > 0) {
          // Same paragraph pattern
          aDiv.innerHTML = afterStrong;
          card.appendChild(qDiv);
          card.appendChild(aDiv);
          p.parentNode?.insertBefore(card, p);
          p.remove();
          return;
        }

        // Pattern 2: question is standalone <p><strong>Q?</strong></p>
        // answer is the NEXT <p> sibling
        const nextSibling = p.nextElementSibling;
        if (!nextSibling || nextSibling.tagName !== "P") return;

        aDiv.innerHTML = nextSibling.innerHTML;
        card.appendChild(qDiv);
        card.appendChild(aDiv);
        p.parentNode?.insertBefore(card, p);
        p.remove();
        nextSibling.remove();
      });
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
