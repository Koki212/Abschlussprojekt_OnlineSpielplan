// import axios from "axios";

// // Base URL
// const API_BASE_URL = "http://localhost:5285";
// // Competition Endpoints
// const API_ENDPOINT_GetAllCompetitions =
//     API_BASE_URL + "/api/competition/GetAllCompetitions";
// const API_ENDPOINT_CreateCompetition =
//     API_BASE_URL + "/api/competition/CreateCompetition?name=";
// const API_ENDPOINT_GetCompetitionByName =
//     API_BASE_URL + "/api/competition/GetCompetitionByName?name=";

// export const GetAllCompetitions = async () => {
//     const response = await axios.get(API_ENDPOINT_GetAllCompetitions);
//     return response.data;
// };

// export const CreateCompetition = async (competitionName) => {
//     const response = await axios.post(
//         API_ENDPOINT_CreateCompetition + competitionName
//     );
//     return response.data;
// };

// export const GetCompetitionByName = async (competitionName) => {
//     const response = await axios.get(
//         API_ENDPOINT_GetCompetitionByName + competitionName
//     );
//     return response.data;
// };
