import React from "react";


function Home() {
    return (
        <div className="content">
            <div className="info" id="info_index">
                <ul id="giovanni_desc">
                    <li>Data Analysis.</li>
                    <li>Music Composition.</li>
                    <li>Gaming.</li>
                </ul>
                <p id="welcome_desc">
                    Here you will find links to my music and my development projects!
                </p>
            </div>
            {/* <div id="twitter-timeline">
                <a className="twitter-timeline" data-width="500" data-height="400" data-theme="dark"
                    href="https://twitter.com/SanaraX?ref_src=twsrc%5Etfw">Tweets by SanaraX</a>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div> */}

            {/* <div id="spotify-player">
                <iframe src="https://open.spotify.com/embed/playlist/02zhcbfL08VYuGPpOAzhTJ" width="500" height="400"
                    frameBorder="0" allowtransparency="true" allow="encrypted-media">
                </iframe>
            </div> */}
        </div>
    )
}

export default Home