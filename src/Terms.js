import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import SearchButton from "./SearchButton";
import { useHistory, withRouter } from 'react-router-dom';
 import Alphabet from "./Alphabet";


const Terms = ({ terms, search, resources, setSearch, setToken, token, handleLoginClick }) => {
    const filteredTerms = terms.filter((term) =>
        term.term.toLowerCase().includes(search.toLowerCase()
        ))
    function embed(resource) {
        console.log(resources);
        let item;
        if (resource.type === "web") {
            item = <li key={resource.resid}>{resource.link}</li>;
        } else {
            item = <YoutubeEmbed embedUrl={resource.link} />;
        }
        return item;
    }
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/singleTermPage/${id}`);
    }
    let prevLetter = '';
    return (
        <div>
            {/* <Nav setToken={setToken} token={token} handleLoginClick={handleLoginClick}/> */}
            <div className="Terms">
                <SearchButton search={search} setSearch={setSearch} />
                 <Alphabet />
                { filteredTerms.sort((a, b)=>{
                    const aTerm=a.term.toLowerCase();
                    const bTerm=b.term.toLowerCase();
                    if(aTerm < bTerm) return -1;
                    if(aTerm > bTerm) return 1;
                    return 0;})
                .map((term) => {
                    const letter = term.term.toUpperCase()[0];
                    const idRef = (letter === prevLetter) ? "" : letter;
                    prevLetter = letter;
                    return (
                    <div key={term.id} id={idRef}>
                        <h2 className="container" ><a href={`/singleTermPage/${term.id}`}>{term.term}</a></h2>
                        {/* h2< className="container" onClick={() => handleClick(term.id)}>{term.term}</h2> */}
                        <p>{term.definition}</p>

                        {/* {term.resources ? (

                            term.resources.map((resource) =>
                                <li key={resource.resid}>

                                    <h3>{resource.link}</h3>
                                    {embed(resource.web)}</li>)
                        )
                             :
                             <h4></h4> */}
                          {/* } */}
                     </div>
                    )}
                )}
            </div>
        </div>
    )
};
export default withRouter(Terms)

// export default Terms;