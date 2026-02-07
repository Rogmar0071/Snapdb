// =============================
// SnapDB Brain (app.js)
// Roger Edition 🚀
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input");
    const chatArea = document.querySelector("body");
    const speakBtn = document.querySelector(".mic-btn, .speak-btn, button"); // fallback

    // ---------- UI helper ----------
    function addMessage(text, type = "bot") {
        const bubble = document.createElement("div");

        bubble.innerText = text;
        bubble.style.margin = "12px";
        bubble.style.padding = "14px 18px";
        bubble.style.borderRadius = "16px";
        bubble.style.maxWidth = "80%";
        bubble.style.fontSize = "16px";

        if (type === "user") {
            bubble.style.background = "#3b82f6";
            bubble.style.color = "white";
            bubble.style.marginLeft = "auto";
        } else {
            bubble.style.background = "#1f2937";
            bubble.style.color = "white";
        }

        chatArea.appendChild(bubble);
        window.scrollTo(0, document.body.scrollHeight);
    }

    // ---------- Fake AI ----------
    function fakeAIReply(text) {

        const t = text.toLowerCase();

        if (t.includes("construction"))
            return "Nice. Construction business selected. I can help with materials, suppliers, costing or scheduling. What do you need first?";

        if (t.includes("order"))
            return "Got it. Let's create a new order. Tell me item and quantity.";

        return "I'm ready. Tell me what you'd like to explore.";
    }

    function process(text) {
        if (!text) return;

        addMessage(text, "user");

        setTimeout(() => {
            addMessage(fakeAIReply(text), "bot");
        }, 400);
    }

    // ---------- Typing ----------
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            process(input.value);
            input.value = "";
        }
    });

    // ---------- Voice ----------
    if ('webkitSpeechRecognition' in window) {

        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = "en-US";

        speakBtn.addEventListener("click", () => {
            recognition.start();
        });

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            process(text);
        };
    }

});
