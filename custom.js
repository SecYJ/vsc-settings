console.clear();

document.addEventListener("DOMContentLoaded", () => {
	const el = document.querySelector(".mtk6");
	console.log("work", el);

	// Callback function to execute when mutations are observed
	const callback = (mutationsList, observer) => {
		for (const mutation of mutationsList) {
			if (mutation.type === "childList") {
				mutation.addedNodes.forEach((node) => {
					// if (
					// 	// node.nodeType === Node.ELEMENT_NODE &&
					//     node.
					// 	node.classList.contains("mtk6") &&
					// 	// node.textContent.includes("*")
					// 	node.textContent === "*"
					// ) {
					// 	// Apply style directly to the element node
					// 	node.style.color = "blue"; // Example style
					// }

					if (!(node instanceof Element) || !(node instanceof Node)) return;

					const selects = node.querySelectorAll(".mtk6");

					selects.forEach((s) => {
						if (s.textContent === "*") {
							s.style.fontFamily = "MonoLisa";
						}

						if (s.textContent === ">=") {
							s.classList.add("customize-mtk6");
						}
					});
				});
			}
		}
	};

	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);

	// Options for the observer (which mutations to observe)
	const config = { attributes: false, childList: true, subtree: true };

	// Start observing the target node for configured mutations
	observer.observe(document.body, config);

	// Example: To stop observing
	// observer.disconnect();
});
