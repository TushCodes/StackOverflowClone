import * as api from "../api";
import { POST_QUESTION, FETCH_ALL_QUESTIONS, POST_ANSWER } from '../reducers/question';

export const askquestion = (questiondata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postquestion(questiondata);
        dispatch(POST_QUESTION(data));
        dispatch(fetchallquestion());
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const fetchallquestion = () => async (dispatch) => {
    try {
        const { data } = await api.getallquestions();
        dispatch(FETCH_ALL_QUESTIONS(data));
    } catch (error) {
        console.log(error);
    }
};

export const deletequestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deletequestion(id);
        dispatch(fetchallquestion());
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const votequestion = (id, value) => async (dispatch) => {
    try {
        await api.votequestion(id, value);
        dispatch(fetchallquestion());
    } catch (error) {
        console.log(error);
    }
};

export const postanswer = (answerdata) => async (dispatch) => {
    try {
        const { id, noofanswers, answerbody, useranswered, userid } = answerdata;
        const { data } = await api.postanswer(id, noofanswers, answerbody, useranswered, userid);
        dispatch(POST_ANSWER(data));
        dispatch(fetchallquestion());
    } catch (error) {
        console.log(error);
    }
};

export const deleteanswer = (id, answerid, noofanswers) => async (dispatch) => {
    try {
        await api.deleteanswer(id, answerid, noofanswers);
        dispatch(fetchallquestion());
    } catch (error) {
        console.log(error);
    }
};
