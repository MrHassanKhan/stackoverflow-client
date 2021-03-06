export class QuestionPageFilter {
    page: number = 1;
    pageSize: number = 10;
    sort :string | null = 'activity';
    order :string| null = 'asc';
    tagged :string| null = null;
    intitle :string| null = null;
}


export interface AnswerResponse {
  items: AnswerItem[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

export interface AnswerItem {
  owner: Owner
  is_accepted: boolean
  score: number
  body: any;
  last_activity_date: number
  creation_date: number
  answer_id: number
  question_id: number
  content_license: string
}

export interface Owner {
  account_id: number
  reputation: number
  user_id: number
  user_type: string
  profile_image: string
  display_name: string
  link: string
}




export interface QuestionResponse {
    items: Item[]
    has_more: boolean
    quota_max: number
    quota_remaining: number
  }
  
  export interface Item {
    tags: string[]
    owner: Owner
    is_answered: boolean
    view_count: number
    body: any
    answer_count: number
    score: number
    last_activity_date: number
    creation_date: number
    question_id: number
    content_license: string
    link: string
    title: string
    last_edit_date?: number
    accepted_answer_id?: number
  }
  
  export interface Owner {
    account_id: number
    reputation: number
    user_id: number
    user_type: string
    profile_image: string
    display_name: string
    link: string
    accept_rate?: number
  }
  