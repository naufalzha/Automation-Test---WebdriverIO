describe("Smoke Test", () => {
    it("Verrify URL", async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        //console.log("Session Id is ",browser.sessionId );
        //console.log("Capability ",browser.capabilities);
        //console.log("Trainer Name is ", browser.config.trainerName);
        await expect(browser).toHaveUrlContaining('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });


    it("verify Title", async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        await expect(browser).toHaveTitle('OrangeHRM');
    });

    it("verify Login", async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        await expect(browser).toHaveTitle('OrangeHRM');
        await $("input[name='username']").setValue('admin');
        await $("input[name='password']").setValue('admin123');
        await $('button[type="submit"]').click();
        await expect(browser).toHaveTitle("OrangeHRM");
    });
});
