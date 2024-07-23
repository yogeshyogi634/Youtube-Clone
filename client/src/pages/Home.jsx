import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`api/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Card from "../components/Card";
// import axios from "axios";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

// const Home = ({ type }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await axios.get(`/videos/${type}`);
//         console.log(res.data); // Log the response to check its structure
//         if (Array.isArray(res.data)) {
//           setVideos(res.data);
//         } else {
//           console.error("API response is not an array:", res.data);
//           setVideos([]); // Set videos to an empty array if the response is not an array
//         }
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//         setVideos([]); // Set videos to an empty array if there's an error
//       }
//     };
//     fetchVideos();
//   }, [type]);

//   return (
//     <Container>
//       {videos.map((video) => (
//         <Card key={video.id} video={video} />
//       ))}
//     </Container>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Card from "../components/Card";
// import axios from "axios";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

// const Home = ({ type }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const url = `http://localhost:8800/api/videos/${type}`; // Replace with your actual base URL
//         console.log("Fetching URL:", url);
//         const res = await axios.get(url, {
//           headers: {
//             Accept: "application/json",
//           },
//         });
//         console.log("Response:", res);
//         if (Array.isArray(res.data)) {
//           setVideos(res.data);
//         } else {
//           console.error("API response is not an array:", res.data);
//           setVideos([]);
//         }
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//         setVideos([]);
//       }
//     };
//     fetchVideos();
//   }, [type]);

//   return (
//     <Container>
//       {videos.map((video) => (
//         <Card key={video.id} video={video} />
//       ))}
//     </Container>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Card from "../components/Card";
// import axios from "axios";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

// const Home = ({ type }) => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const url = `api/videos/${type}`;
//         console.log("Fetching URL:", url);
//         const res = await axios.get(url, {
//           headers: {
//             Accept: "application/json",
//           },
//         });
//         console.log("Response:", res);
//         if (Array.isArray(res.data)) {
//           setVideos(res.data);
//         } else {
//           console.error("API response is not an array:", res.data);
//           setVideos([]);
//         }
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//         setVideos([]);
//       }
//     };
//     fetchVideos();
//   }, [type]);

//   return (
//     <Container>
//       {videos.map((video) => (
//         <Card key={video.id} video={video} />
//       ))}
//     </Container>
//   );
// };

// export default Home;
