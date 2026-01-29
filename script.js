document.addEventListener("DOMContentLoaded", () => {

    const categories = ["merch", "ads", "graphics", "personal"];
    const maxImagesPerCategory = 15;
    const allDiv = document.getElementById("all");
    const categoryDivs = {};

    categories.forEach(cat => {
        categoryDivs[cat] = document.getElementById(cat);
    });

    const fileExtensions = ["jpg", "jpeg", "png", "gif"];

    categories.forEach(cat => {
        const catDiv = categoryDivs[cat];

        for (let i = 1; i <= maxImagesPerCategory; i++) {

            fileExtensions.forEach(ext => {
                const url = `assets/${cat}/img${i}.${ext}`;
                const img = new Image();
                img.src = url;
                img.alt = `${cat} ${i}`;
                img.loading = "lazy";

                img.onload = () => {
                    if (catDiv) catDiv.appendChild(img);
                    if (allDiv) allDiv.appendChild(img.cloneNode());
                };

                img.onerror = () => {
                };
            });
        }
    });

    function portfolio_tab_functionality() {
        const tabs = document.getElementById("buzzword_list").querySelectorAll("span");

        function activateTab(tab) {
            tabs.forEach(t => {
                t.style.color = "";
                t.style.backgroundColor = "";
                document.getElementById(t.innerText.trim().toLowerCase()).style.display = "none"
            });
            tab.style.backgroundColor = "rgb(163, 94, 228)";
            tab.style.color = "ghostwhite";
            document.getElementById(tab.innerText.trim().toLowerCase()).style.display = "flex"

        }

        tabs.forEach(tab => {
            tab.addEventListener("mouseenter", () => {
                activateTab(tab);
            });

            if (tab.innerText.trim().toLowerCase() == "all") {
                activateTab(tab);
            }
        });
    }

    portfolio_tab_functionality();
});