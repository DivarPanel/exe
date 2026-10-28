const { app, BrowserWindow, shell, dialog } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 820, minWidth: 850, minHeight: 600,
    title: 'Divarpanel.az Qaimə',
    backgroundColor: '#f3f6f9',
    webPreferences: {
      partition: 'persist:divarpanel-qaime',
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://wa.me/') || url.startsWith('https://api.whatsapp.com/')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault();
      if (url.startsWith('https://wa.me/') || url.startsWith('https://api.whatsapp.com/')) shell.openExternal(url);
    }
  });
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
