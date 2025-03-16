document$.subscribe(() => { 
    document.querySelectorAll(".arithmatex").forEach(el => {
        if (!el.dataset.katexProcessed) {  // 避免重复渲染
            el.dataset.katexProcessed = "true";  // 标记已处理
            katex.render(el.textContent, el, { displayMode: el.tagName === "DIV" });
        }
    });
});
