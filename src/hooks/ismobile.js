function isMobileDevice() {
    return typeof window !== 'undefined' ?
        (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) : 
        undefined;
};

export default isMobileDevice;