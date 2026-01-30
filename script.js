document.addEventListener("DOMContentLoaded", () => {

const categories = ["merch", "ads", "graphics", "personal", "traditional"];
    const categoryDivs = {};

    categories.forEach(cat => {
        categoryDivs[cat] = document.getElementById(cat);
    });
    fetch("https://raw.githubusercontent.com/isaimel/Portfolio_Website/main/assets/images.json")
        .then(res => res.json())
        .then(data => {

            categories.forEach(cat => {
                const catDiv = categoryDivs[cat];
                const files = data[cat] || [];

                files.forEach(file => {
                    const img = new Image();
                    img.src = `assets/${cat}/${file}`;
                    img.alt = `${cat} image`;
                    img.loading = "lazy";
                    console.log(cat);

                    img.onload = () => {
                        random_append(catDiv, img);
                    };
                });
            });

        })
        .catch(err => {
            console.error("Failed to load images.json", err);
    });

    function random_append(container, node) {
        if (Math.random() < 0.5) {
            container.insertBefore(node, container.firstChild);
        } else {
            container.appendChild(node);
        }
}

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

            if (tab.innerText.trim().toLowerCase() == "merch") {
                activateTab(tab);
            }
        });
    }

    portfolio_tab_functionality();
});