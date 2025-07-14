import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// {
//     "kind": "identitytoolkit#SignupNewUserResponse",
//     "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE4ZGY2MmQzYTBhNDRlM2RmY2RjYWZjNmRhMTM4Mzc3NDU5ZjliMDEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVkdXgtZWNvbW1lcmNlLWE2ZWE5IiwiYXVkIjoicmVkdXgtZWNvbW1lcmNlLWE2ZWE5IiwiYXV0aF90aW1lIjoxNzUyNDMwMTI1LCJ1c2VyX2lkIjoiQkF2MFdBOERJN1RFY0xuTXVvYTNaaWg5UGh6MSIsInN1YiI6IkJBdjBXQThESTdURWNMbk11b2EzWmloOVBoejEiLCJpYXQiOjE3NTI0MzAxMjUsImV4cCI6MTc1MjQzMzcyNSwiZW1haWwiOiJ5b0B5LmVzIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInlvQHkuZXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.sZur8-KBqlsHL0okPCGnGjmvOSnDr9qNnBBigW_WCXaiX2h5Lz7CRWm0qVsi2rQCbmnCjmqQEH4qRXURY4LX8welwdmzCT1dy-ztsCtHugqT7S0D1ggEeGceSjI90u4ne0iFbhr2B2e7fXe01hi_sEXoGYQJTGCHwuP_re204Mj30yxEOC8F6QUWngNhItw_N1YYW_UPQAdHRuCIZiaWdEnEtATo2PTs0zNWnMJKmlHH2NACDRN3zfJNOwYlKFhH0cv8SL4ieesFXggeR23RloH8Dx7TitpnJQn0YgXSCASEUfO9bm2DOf5MzW_Jm673vKAU71wy7APgXjwqRhieIA",
//     "email": "yo@y.es",
//     "refreshToken": "AMf-vBwzQwpqqs3w93WU6RYt97MVTfHYnBjCveG3m5rMBkZYdYpAqfg7Su2JeAjcMmRyigfP2VSPHmKdcKvNAVfQJlWDOAAXd_5x6wskZQbWLjoTlY2tP3XOb19lMlTHQA3gV5hN8AMDquU4yPUZy0KGKRxHdGu0q3t4B2ef1LXSL-jgUkuQPoNJYHMPaMI27iJPTybrtS528Zb5F6vjZffeWTOd3aCQFg",
//     "expiresIn": "3600",
//     "localId": "BAv0WA8DI7TEcLnMuoa3Zih9Phz1"
// }
