import Location from "./../assets/flaticons/gps.png";
import List from "./../assets/flaticons/list-symbol-of-three-items-with-dots.png";
import Search from "./../assets/flaticons/magnifying-glass.png";
import HikingBag from "./../assets/flaticons/topics/backpack.png";
import Car from "./../assets/flaticons/topics/car.png";
import Pills from "./../assets/flaticons/topics/medicine.png";
import Hotel from "./../assets/flaticons/topics/resort.png";
import Restaurant from "./../assets/flaticons/topics/restaurant.png";
const Wallpaper = () => {
  return (
    <section id="home" className="home">
      <div className="wallpaper">
        <div className="wallpaper-content">
          <h2>
            best place to find and explore <br />
            that all you need
          </h2>
          <p>
            Find Best Place, Restaurant, Hotel, Real State and many more think
            in just One click
          </p>
          <div className="form-area">
            <form className="home-form" action="">
              <div className="inputs">
                <div className="category">
                  <label for="category">What?</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Ex: Palce, Resturent, Food, Automobile"
                  />
                  <img src={List} alt="list with three dots" />
                </div>
                <div className="location">
                  <label for="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Ex: London, NewYork, Rome"
                  />
                  <img src={Location} alt="address icon" />
                </div>
              </div>
            </form>
            <button className="search-button">
              Search
              <img src={Search} alt="search icon" />
            </button>
          </div>
        </div>
        <div className="topics">
          <div className="topic">
            <img src={Restaurant} alt="Restaurant image" />
            <p>
              <b>Resturent</b>
            </p>
            <p>150 listings</p>
          </div>
          <div className="topic">
            <img src={HikingBag} alt="Hiking bag image" />
            <p>
              <b>Destination</b>
            </p>
            <p>214 listings</p>
          </div>
          <div className="topic">
            <img src={Hotel} alt="Hotel image" />
            <p>
              <b>Hotels</b>
            </p>
            <p>185 listings</p>
          </div>
          <div className="topic">
            <img src={Pills} alt="Pills image" />
            <p>
              <b>Healthcare</b>
            </p>
            <p>200 listings</p>
          </div>
          <div className="topic">
            <img src={Car} alt="Car image" />
            <p>
              <b>Automobile</b>
            </p>
            <p>120 listings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallpaper;
