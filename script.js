document.addEventListener("DOMContentLoaded", () => {

    label_to_folders = {
        "Merch": "assets/merchandise",
        "Ads": "assets/advertisements",
        "Graphics": "assets/graphics",
        "Personal": "assets/personal",
    }

    fetch('https://api.are.na/v2/channels/portfolio?per=100&t=' + Date.now())
        .then(r => r.json())
        .then(data => {
            arenaContent.innerHTML = '';
            const all = document.getElementById("all");

            data.contents.forEach(block => {
                let imageUrl = block.image?.display?.url || block.image?.large?.url || block.image?.original?.url || block.attachment?.url || (block.source?.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i) && block.source.url);
                if (!imageUrl){
                    return;
                }

                const img = document.createElement('img');
                img.src = imageUrl;
                img.loading = 'lazy';

                var blockDescription = block.description || '';
                var words = blockDescription.split(/\s+/);
                for (var j = 0; j < words.length; j++) {
                    const div = document.getElementById(j);
                    div.appendChild(img);
                    if (Math.random() < 0.5){
                        all.appendChild(img);
                    }
                    else{
                        all.insertBefore(img, all.firstChild);
                    }
                }
            });
        })
    .catch(() => {});

    function portfolio_tab_functionality() {
        const tabs = document.getElementById("buzzword_list").querySelectorAll("span");

        function activateTab(tab) {
            tabs.forEach(t => {
                t.style.color = "";
                t.style.backgroundColor = "";
            });
            tab.style.backgroundColor = "rgb(163, 94, 228)";
            tab.style.color = "ghostwhite";
        }

        tabs.forEach(tab => {
            tab.addEventListener("mouseenter", () => {
                activateTab(tab);
            });

            if (tab.innerText.trim() == "All") {
                activateTab(tab);
            }
        });
    }

    portfolio_tab_functionality();
});