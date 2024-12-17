// Check if the ChatGPT sidebar window is already open
if (!window.chatgptSidebarWindow || window.chatgptSidebarWindow.closed) {
    // Calculate position: Show the popup on the right side of the screen
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
  
    // Define the dimensions and position for the sidebar window
    const sidebarWidth = 400; // Width of the sidebar
    const sidebarHeight = Math.min(screenHeight - 100, 700); // Max height to fit the screen
    const topPosition = 50; // Space from the top of the screen
    const leftPosition = screenWidth - sidebarWidth; // Stick to the right side
  
    // Open a new window
    window.chatgptSidebarWindow = window.open(
      "https://chat.openai.com/", // URL to load
      "ChatGPT Sidebar", // Name of the window
      `width=${sidebarWidth},height=${sidebarHeight},top=${topPosition},left=${leftPosition},resizable=yes,scrollbars=yes`
    );
  
    // Add a listener to detect when the window is closed
    window.chatgptSidebarWindow.onbeforeunload = () => {
      console.log("ChatGPT sidebar window closed.");
      window.chatgptSidebarWindow = null; // Reset the reference
    };
  } else {
    // If the window is already open, bring it into focus
    window.chatgptSidebarWindow.focus();
  }
  