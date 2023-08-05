describe('Element Test', () => {
    it('Filling Form', async() => {
        await browser.url('https://opensource-demo.orangehrmlive.com/')
        await browser.maximizeWindow()
        const username = await $("input[name='username']")
        await username.setValue('Admin')
        const value = await username.getValue()
        console.log("value yang dimasukan adalah", value);
        const loginButton = await $('button[type="submit"]')
        const clickstatus = await expect(loginButton).toBeClickable()
        console.log('clickable?',clickstatus);
        const loginButtonvalue = await loginButton.getAttribute("class")
        console.log("Button Attreibutes is", loginButtonvalue);
        const cssattribute = await loginButton.getCSSProperty('font-size')
        console.log("Button font size is", cssattribute);
        //const linkcapturetext = await $("//a[contains(@href,'requestPasswordResetCode')]").getText()
        //console.log('linkcapturetext is', linkcapturetext);
        //await expect(linkcapturetext).toHaveValueContaining('Forgot')
    });
});