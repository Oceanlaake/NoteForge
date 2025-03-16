document$.subscribe(() => { 
    document.querySelectorAll(".arithmatex").forEach(el => {
        katex.render(el.textContent, el, { displayMode: el.tagName === "DIV" });
    });
});
