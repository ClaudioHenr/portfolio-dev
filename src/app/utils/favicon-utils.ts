
export function changeFavicon(iconPath: string): void {
    const faviconElement = document.getElementById("favicon") as HTMLLinkElement | null;
    if (faviconElement) {
        faviconElement.href = iconPath;
    }
}