(() => {
    const launcher = document.getElementById("ai-launcher");
    const panel = document.getElementById("ai-panel");
    const close = document.getElementById("ai-close");
    const form = document.getElementById("ai-form");
    const input = document.getElementById("ai-input");
    const messages = document.getElementById("ai-messages");

    if (!launcher || !panel || !close || !form || !input || !messages) {
        console.error("Weirdo: chatbot HTML elements are missing.");
        return;
    }

    function setOpen(open) {
        panel.hidden = !open;
        launcher.setAttribute("aria-expanded", String(open));
        if (open) input.focus();
    }

    function addMessage(text, type) {
        const message = document.createElement("div");
        message.className = "ai-message ai-" + type;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        return message;
    }

    launcher.addEventListener("click", () => setOpen(panel.hidden));
    close.addEventListener("click", () => setOpen(false));

    form.addEventListener("submit", async event => {
        event.preventDefault();
        const message = input.value.trim();
        if (!message) return;

        addMessage(message, "user");
        input.value = "";
        const pending = addMessage("Let me think...", "bot");

        try {
            const response = await fetch("api/v1/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });

            const result = await response.json();
            pending.remove();

            if (!response.ok || result.success !== true) {
                addMessage(
                    result.error?.message || "Please try again in a moment.",
                    "bot"
                );
                return;
            }

            addMessage(result.data.reply, "bot");
        } catch (error) {
            pending.remove();
            addMessage(
                "I couldn't connect just now. Please try again.",
                "bot"
            );
            console.error("Weirdo chat error:", error);
        }
    });
})();

