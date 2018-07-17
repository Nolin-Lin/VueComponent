import Vue from 'vue';
import Clipboard from 'clipboard';


export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });

  clipboard.on('success', () => {
    Vue.prototype.$message({
      message: '复制成功',
      type: 'success',
      duration: 1500
    });

    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  });

  clipboard.on('error', () => {
    Vue.prototype.$message({
      message: '复制失败，请联系程序员',
      type: 'error'
    });

    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  });

  clipboard.onClick(event);
}
