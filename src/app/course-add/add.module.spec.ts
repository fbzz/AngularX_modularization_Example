import { AddModule } from './add.module';

describe('LoginModule', () => {
    let loginModule: AddModule;

    beforeEach(() => {
        loginModule = new AddModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
