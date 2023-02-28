import { ErrorHandler } from "@angular/core";



//ErrorHandler is responsible for handling errors globally during development.
export class GlobalErrorHandler extends ErrorHandler {
    override handleError(error: any): void {
        alert(error);
    }
}