const FormPage = require('../pageobjects/form.page');

describe('My Form application', () => {
    it('should find a h1 with the text "Form Fields" ', async () => {
        await FormPage.open();

        await expect(FormPage.header).toHaveTextContaining(
            'Form Fields');
    })

it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
    await FormPage.submit.click();

    await expect(FormPage.errorText).toHaveTextContaining(
        'Please enter a valid name'
    );
})
});
