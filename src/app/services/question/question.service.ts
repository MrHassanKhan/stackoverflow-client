import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { QuestionPageFilter, QuestionResponse } from 'src/app/dtos/question/question-filter.dto';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class QuestionService {
    
    constructor(private httpClient: HttpClient) { }


    filterQuestions(data:QuestionPageFilter): Observable<QuestionResponse> {
      // /2.3/questions?page=1&pagesize=20&order=asc&sort=hot&site=stackoverflow
      let baseUrl = environment.baseURL + 'questions';
      baseUrl += `?page=${data.page}&pageSize=${data.pageSize}`;
      baseUrl += `&sort=${data.sort}&order=${data.order}`;
      return this.httpClient.get<QuestionResponse>(baseUrl + '&site=stackoverflow').pipe(catchError(this.handleError));
    }

    getById(questionId:any): Observable<QuestionResponse> {
      let baseUrl = environment.baseURL + 'questions';
      baseUrl += `/${questionId}?`
      return this.httpClient.get<QuestionResponse>(baseUrl + 'site=stackoverflow').pipe(catchError(this.handleError));
    }
    getCommentsByQuestionId(questionId:any): Observable<QuestionResponse> {
      let baseUrl = environment.baseURL + 'questions';
      baseUrl += `/${questionId}/comments?`
      return this.httpClient.get<QuestionResponse>(baseUrl + 'site=stackoverflow').pipe(catchError(this.handleError));
    }

    getRelatedQuestionsById(questionId:any): Observable<QuestionResponse> {
      let baseUrl = environment.baseURL + 'questions';
      baseUrl += `/${questionId}/related?`
      return this.httpClient.get<QuestionResponse>(baseUrl + 'site=stackoverflow').pipe(catchError(this.handleError));
    }
    

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        // switch (err.error) {
        //   case value:
            
        //     break;
        
        //   default:
        //     break;
        // }
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.error?.error_message}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }
}