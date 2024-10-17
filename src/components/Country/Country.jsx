import "./Country.css"
const Country = ({country}) => {
    console.log(country)

    const {name, flags, region, status} = country ;
    return (
        <div className="country">
            <h2>Name : {name.common}</h2>
            
            <h3>Region : {region}</h3>
            <h3>Status : {status}</h3>
            <img src={flags?.png} alt="" />
            
        </div>
    );
};

export default Country;