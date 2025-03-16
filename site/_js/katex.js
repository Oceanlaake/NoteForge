document$.subscribe(() => { 
    document.querySelectorAll(".arithmatex").forEach(el => {
        katex.render(el.innerHTML, el, { displayMode: el.tagName === "DIV" });
    });
});
