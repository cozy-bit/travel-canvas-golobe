import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { motion, AnimatePresence } from "motion/react";
import { useFavorites } from "../../context/FavoritesContext";

import hotel_hero from "../../assets/images/hotels/hotel-hero.png";
import hotel1 from "../../assets/images/hotels/hotel1.png";
import hotel2 from "../../assets/images/hotels/hotel2.png";
import hotel3 from "../../assets/images/hotels/hotel3.png";
import hotel4 from "../../assets/images/hotels/hotel4.png";

import nature1 from "../../assets/images/hotels/nature1.png";
import nature2 from "../../assets/images/hotels/nature2.png";
import nature3 from "../../assets/images/hotels/nature3.png";
import nature4 from "../../assets/images/hotels/nature4.png";


const hotels = [
    {
        id: 1,
        image: hotel1,
        name: "CVK Park Bosphorus Hotel Istanbul",
        location: "Istanbul, Turkey",
        price: 240,
        rating: 4.2,
        reviews: 371,
        room: "Deluxe King Room",
    },
    {
        id: 2,
        image: hotel2,
        name: "Swissotel The Bosphorus Istanbul",
        location: "Istanbul, Turkey",
        price: 180,
        rating: 4.5,
        reviews: 428,
        room: "Superior Room",
    },
    {
        id: 3,
        image: hotel3,
        name: "The Ritz-Carlton Istanbul",
        location: "Istanbul, Turkey",
        price: 320,
        rating: 4.7,
        reviews: 526,
        room: "Luxury King Room",
    },
    {
        id: 4,
        image: hotel4,
        name: "Rixos Premium Göcek",
        location: "Göcek, Turkey",
        price: 210,
        rating: 4.4,
        reviews: 298,
        room: "Premium Room",
    },
];


const natureHotels = [
    {
        id: 5,
        image: nature1,
        name: "The Grand Resort",
        location: "Bali, Indonesia",
        price: 130,
        rating: 4.6,
    },
    {
        id: 6,
        image: nature2,
        name: "Paradise Hotel",
        location: "Maldives",
        price: 190,
        rating: 4.8,
    },
    {
        id: 7,
        image: nature3,
        name: "Mountain Escape",
        location: "Switzerland",
        price: 150,
        rating: 4.5,
    },
    {
        id: 8,
        image: nature4,
        name: "Forest Retreat",
        location: "Thailand",
        price: 110,
        rating: 4.4,
    },
];


function ArrowRight() {
    return (
        <span className="text-[18px] leading-none">
            →
        </span>
    );
}


function HeartIcon({ active }) {
    return (
        <span
            className={`text-[20px] ${
                active ? "text-[#FF6B6B]" : "text-[#112211]"
            }`}
        >
            {active ? "♥" : "♡"}
        </span>
    );
}


function Star() {
    return (
        <span className="text-[#FFB800]">
            ★
        </span>
    );
}


export default function HotelsPage() {

    const [search, setSearch] = useState("");

    const [selectedHotel, setSelectedHotel] = useState(null);

    const { isFavoriteHotel, toggleFavoriteHotel } = useFavorites();

    const [showPayment, setShowPayment] = useState(false);

    const [showConfirmation, setShowConfirmation] = useState(false);

    const [showAddCard, setShowAddCard] = useState(false);

    const [showFavorites, setShowFavorites] = useState(false);

    const [cardNumber, setCardNumber] = useState("");

    const [cardName, setCardName] = useState("");

    const [expiry, setExpiry] = useState("");

    const [cvv, setCvv] = useState("");


    /* =====================================================
       FAVORITES
    ===================================================== */

    const toggleFavorite = (id) => {
        const allH = [...hotels, ...natureHotels];
        const target = allH.find((h) => h.id === id);
        if (target) {
            toggleFavoriteHotel(target);
        }
    };


    /* =====================================================
       SEARCH
    ===================================================== */

    const filteredHotels = hotels.filter((hotel) =>
        `${hotel.name} ${hotel.location}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    /* =====================================================
       BOOK
    ===================================================== */

    const handleBook = () => {

        setShowPayment(true);
    };


    const handlePayment = (e) => {

        e.preventDefault();

        setShowPayment(false);

        setShowConfirmation(true);
    };


    /* =====================================================
       FAVORITES
    ===================================================== */

    const favoriteHotels = [
        ...hotels,
        ...natureHotels,
    ].filter((hotel) =>
        isFavoriteHotel(hotel.id)
    );


    return (
        <Layout>

            <div className="w-full bg-white dark:bg-[#0B130E] text-[#112211] dark:text-[#F3F4F6] transition-colors duration-300">


                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    pt-5
                ">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
                            relative
                            min-h-[420px]
                            sm:min-h-[470px]
                            lg:min-h-[520px]
                            rounded-[18px]
                            overflow-hidden
                            bg-[#18382e]
                        "
                    >

                        <img
                            src={hotel_hero}
                            alt="Travel"
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                            "
                        />


                        <div className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-black/65
                            via-black/25
                            to-transparent
                        " />


                        <div className="
                            relative
                            z-10
                            h-full
                            min-h-[420px]
                            sm:min-h-[470px]
                            lg:min-h-[520px]
                            flex
                            items-center
                        ">

                            <div className="
                                px-6
                                sm:px-10
                                lg:px-16
                                max-w-[570px]
                                text-white
                                pt-8
                            ">

                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.15,
                                    }}
                                    className="
                                        text-[12px]
                                        sm:text-[14px]
                                        mb-3
                                    "
                                >
                                    Explore the world
                                </motion.p>


                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                    }}
                                    className="
                                        text-[32px]
                                        sm:text-[42px]
                                        lg:text-[52px]
                                        font-bold
                                        leading-[1.05]
                                        max-w-[500px]
                                    "
                                >
                                    Make your travel
                                    <br />
                                    dreams come true
                                </motion.h1>


                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.3,
                                    }}
                                    className="
                                        mt-4
                                        text-[13px]
                                        sm:text-[15px]
                                        text-white/90
                                    "
                                >
                                    Find the perfect hotel for your next
                                    unforgettable journey.
                                </motion.p>

                            </div>

                        </div>

                    </motion.div>


                    {/* =====================================================
                        SEARCH
                    ===================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                        }}
                        className="
                            relative
                            z-20
                            -mt-[48px]
                            mx-4
                            sm:mx-8
                            lg:mx-12
                            bg-white
                            rounded-[12px]
                            shadow-[0_8px_35px_rgba(0,0,0,0.12)]
                            p-3
                            sm:p-4
                        "
                    >

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-[1.5fr_1fr_1fr_auto]
                            gap-2
                        ">

                            <div className="
                                border
                                border-[#D9DED9]
                                rounded-[7px]
                                px-4
                                py-3
                            ">

                                <p className="
                                    text-[9px]
                                    text-[#777]
                                    mb-1
                                ">
                                    Where are you going?
                                </p>

                                <input
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    placeholder="Search destination or hotel"
                                    className="
                                        w-full
                                        outline-none
                                        text-[12px]
                                        text-[#112211]
                                    "
                                />

                            </div>


                            <div className="
                                border
                                border-[#D9DED9]
                                rounded-[7px]
                                px-4
                                py-3
                            ">

                                <p className="
                                    text-[9px]
                                    text-[#777]
                                ">
                                    Check in
                                </p>

                                <p className="
                                    text-[12px]
                                    font-medium
                                    mt-1
                                ">
                                    Thu, Dec 04
                                </p>

                            </div>


                            <div className="
                                border
                                border-[#D9DED9]
                                rounded-[7px]
                                px-4
                                py-3
                            ">

                                <p className="
                                    text-[9px]
                                    text-[#777]
                                ">
                                    Check out
                                </p>

                                <p className="
                                    text-[12px]
                                    font-medium
                                    mt-1
                                ">
                                    Fri, Dec 05
                                </p>

                            </div>


                            <button
                                type="button"
                                className="
                                    bg-[#8BD5BF]
                                    hover:bg-[#76CBB2]
                                    text-white
                                    rounded-[7px]
                                    px-7
                                    py-3
                                    text-[12px]
                                    font-medium
                                    transition
                                "
                            >
                                Search
                            </button>

                        </div>

                    </motion.div>

                </section>



                {/* =====================================================
                    RECENT SEARCHES
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    mt-14
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-5
                    ">

                        <div>

                            <h2 className="
                                text-[20px]
                                sm:text-[24px]
                                font-semibold
                            ">
                                Your recent searches
                            </h2>

                            <p className="
                                text-[11px]
                                text-[#777]
                                mt-1
                            ">
                                Continue planning your next trip
                            </p>

                        </div>


                        <button
                            type="button"
                            className="
                                text-[11px]
                                text-[#47796C]
                                hover:underline
                            "
                        >
                            See all
                        </button>

                    </div>


                    <div className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-3
                    ">

                        {[
                            hotel1,
                            hotel2,
                            hotel3,
                            hotel4,
                        ].map((image, index) => (

                            <motion.button
                                type="button"
                                key={index}
                                whileHover={{ y: -4 }}
                                onClick={() =>
                                    setSelectedHotel(
                                        hotels[index]
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    text-left
                                    p-2
                                    rounded-[8px]
                                    hover:bg-[#F5FAF8]
                                    transition
                                "
                            >

                                <img
                                    src={image}
                                    alt=""
                                    className="
                                        w-[48px]
                                        h-[48px]
                                        rounded-[7px]
                                        object-cover
                                    "
                                />

                                <div className="min-w-0">

                                    <p className="
                                        text-[10px]
                                        sm:text-[11px]
                                        font-semibold
                                        truncate
                                    ">
                                        {hotels[index].name}
                                    </p>

                                    <p className="
                                        text-[9px]
                                        text-[#888]
                                        mt-1
                                    ">
                                        {hotels[index].location}
                                    </p>

                                </div>

                            </motion.button>

                        ))}

                    </div>

                </section>



                {/* =====================================================
                    FALL IN LOVE
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    mt-14
                ">

                    <div className="
                        flex
                        items-end
                        justify-between
                        mb-5
                    ">

                        <div>

                            <h2 className="
                                text-[22px]
                                sm:text-[26px]
                                font-semibold
                            ">
                                Fall into travel
                            </h2>

                            <p className="
                                text-[11px]
                                sm:text-[12px]
                                text-[#777]
                                mt-1
                            ">
                                Find your perfect stay
                            </p>

                        </div>


                        <button
                            type="button"
                            className="
                                text-[11px]
                                text-[#47796C]
                            "
                        >
                            See all
                        </button>

                    </div>


                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                        gap-5
                    ">

                        {filteredHotels.map((hotel) => (

                            <motion.article
                                key={hotel.id}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                                transition={{
                                    duration: 0.35,
                                }}
                                className="
                                    bg-white
                                    rounded-[10px]
                                    overflow-hidden
                                    border
                                    border-[#E7ECE8]
                                    shadow-[0_3px_15px_rgba(0,0,0,0.04)]
                                "
                            >

                                <div className="
                                    relative
                                    h-[190px]
                                ">

                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                        "
                                    />


                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleFavorite(hotel.id)
                                        }
                                        className="
                                            absolute
                                            right-3
                                            top-3
                                            w-[34px]
                                            h-[34px]
                                            bg-white
                                            rounded-full
                                            flex
                                            items-center
                                            justify-center
                                            shadow
                                        "
                                    >
                                        <HeartIcon
                                            active={isFavoriteHotel(
                                                hotel.id
                                            )}
                                        />
                                    </button>

                                </div>


                                <div className="p-4">

                                    <h3 className="
                                        text-[13px]
                                        font-semibold
                                        line-clamp-1
                                    ">
                                        {hotel.name}
                                    </h3>


                                    <p className="
                                        text-[10px]
                                        text-[#777]
                                        mt-1
                                    ">
                                        {hotel.location}
                                    </p>


                                    <div className="
                                        flex
                                        items-center
                                        justify-between
                                        mt-3
                                    ">

                                        <div className="
                                            flex
                                            items-center
                                            gap-1
                                            text-[10px]
                                        ">

                                            <Star />

                                            <span>
                                                {hotel.rating}
                                            </span>

                                            <span className="text-[#999]">
                                                ({hotel.reviews})
                                            </span>

                                        </div>


                                        <div className="text-right">

                                            <span className="
                                                text-[15px]
                                                font-bold
                                            ">
                                                ${hotel.price}
                                            </span>

                                            <span className="
                                                text-[9px]
                                                text-[#888]
                                            ">
                                                /night
                                            </span>

                                        </div>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedHotel(hotel)
                                        }
                                        className="
                                            w-full
                                            mt-4
                                            h-[36px]
                                            rounded-[5px]
                                            bg-[#8BD5BF]
                                            hover:bg-[#73C9B0]
                                            text-white
                                            text-[10px]
                                            font-medium
                                            transition
                                        "
                                    >
                                        View hotel
                                    </button>

                                </div>

                            </motion.article>

                        ))}

                    </div>

                </section>



                {/* =====================================================
                    BACKPACKING
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    mt-16
                ">

                    <div className="
                        grid
                        grid-cols-1
                        lg:grid-cols-[1fr_1.2fr]
                        gap-5
                        bg-[#D5EFE7]
                        rounded-[12px]
                        overflow-hidden
                    ">

                        <div className="
                            p-7
                            sm:p-10
                            flex
                            flex-col
                            justify-center
                        ">

                            <span className="
                                text-[10px]
                                text-[#478073]
                                font-medium
                                mb-2
                            ">
                                ADVENTURE AWAITS
                            </span>


                            <h2 className="
                                text-[25px]
                                sm:text-[32px]
                                font-bold
                                leading-tight
                            ">
                                Backpacking
                                <br />
                                Sri Lanka
                            </h2>


                            <p className="
                                text-[11px]
                                sm:text-[12px]
                                text-[#557067]
                                leading-5
                                mt-4
                                max-w-[360px]
                            ">
                                Discover beautiful beaches, mountains,
                                nature and unforgettable places.
                            </p>


                            <button
                                type="button"
                                className="
                                    mt-6
                                    bg-[#112211]
                                    text-white
                                    rounded-[5px]
                                    px-6
                                    py-3
                                    text-[10px]
                                    w-fit
                                "
                            >
                                Explore now
                                <ArrowRight />
                            </button>

                        </div>


                        <div className="
                            grid
                            grid-cols-2
                            gap-2
                            p-3
                        ">

                            {[
                                nature1,
                                nature2,
                                nature3,
                                nature4,
                            ].map((image, index) => (

                                <motion.img
                                    key={index}
                                    src={image}
                                    alt=""
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="
                                        w-full
                                        h-[140px]
                                        sm:h-[170px]
                                        lg:h-[190px]
                                        object-cover
                                        rounded-[7px]
                                    "
                                />

                            ))}

                        </div>

                    </div>

                </section>



                {/* =====================================================
                    FAVORITES
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    mt-16
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-5
                    ">

                        <div>

                            <h2 className="
                                text-[22px]
                                sm:text-[26px]
                                font-semibold
                            ">
                                Favourites
                            </h2>

                            <p className="
                                text-[11px]
                                text-[#777]
                                mt-1
                            ">
                                Your saved hotels
                            </p>

                        </div>


                        <button
                            type="button"
                            onClick={() =>
                                setShowFavorites(!showFavorites)
                            }
                            className="
                                text-[10px]
                                border
                                border-[#A9DCCE]
                                px-4
                                py-2
                                rounded-[5px]
                            "
                        >
                            {showFavorites
                                ? "Hide"
                                : "Show favourites"}
                        </button>

                    </div>


                    <AnimatePresence>

                        {showFavorites && (

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                }}
                                className="
                                    overflow-hidden
                                "
                            >

                                {favoriteHotels.length === 0 ? (

                                    <div className="
                                        border
                                        border-dashed
                                        border-[#C8D9D4]
                                        rounded-[10px]
                                        p-10
                                        text-center
                                        text-[11px]
                                        text-[#888]
                                    ">
                                        You haven't added any hotels
                                        to favourites yet.
                                    </div>

                                ) : (

                                    <div className="
                                        grid
                                        grid-cols-1
                                        sm:grid-cols-2
                                        lg:grid-cols-4
                                        gap-4
                                    ">

                                        {favoriteHotels.map((hotel) => (

                                            <button
                                                type="button"
                                                key={hotel.id}
                                                onClick={() =>
                                                    setSelectedHotel(hotel)
                                                }
                                                className="
                                                    text-left
                                                    border
                                                    border-[#E6ECE9]
                                                    rounded-[8px]
                                                    overflow-hidden
                                                    hover:-translate-y-1
                                                    transition
                                                "
                                            >

                                                <img
                                                    src={hotel.image}
                                                    alt=""
                                                    className="
                                                        w-full
                                                        h-[140px]
                                                        object-cover
                                                    "
                                                />

                                                <div className="p-3">

                                                    <p className="
                                                        text-[11px]
                                                        font-semibold
                                                    ">
                                                        {hotel.name}
                                                    </p>

                                                    <p className="
                                                        text-[9px]
                                                        text-[#888]
                                                        mt-1
                                                    ">
                                                        {hotel.location}
                                                    </p>

                                                </div>

                                            </button>

                                        ))}

                                    </div>

                                )}

                            </motion.div>

                        )}

                    </AnimatePresence>

                </section>



                {/* =====================================================
                    NEWSLETTER
                ===================================================== */}

                <section className="
                    max-w-[1250px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-0
                    mt-16
                    mb-16
                ">

                    <div className="
                        bg-[#CFEDE4]
                        rounded-[12px]
                        p-7
                        sm:p-10
                        lg:p-12
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-7
                    ">

                        <div>

                            <p className="
                                text-[10px]
                                text-[#47796C]
                                font-medium
                            ">
                                Subscribe
                            </p>

                            <h2 className="
                                text-[25px]
                                sm:text-[32px]
                                font-bold
                                mt-1
                            ">
                                Subscribe Newsletter
                            </h2>

                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                text-[#57746D]
                                mt-2
                            ">
                                Get the latest travel news and offers.
                            </p>

                        </div>


                        <div className="
                            flex
                            w-full
                            md:w-auto
                            bg-white
                            rounded-[5px]
                            overflow-hidden
                            max-w-[390px]
                        ">

                            <input
                                placeholder="Your email address"
                                className="
                                    flex-1
                                    min-w-0
                                    px-4
                                    h-[42px]
                                    text-[10px]
                                    outline-none
                                "
                            />

                            <button
                                type="button"
                                className="
                                    bg-[#112211]
                                    text-white
                                    px-5
                                    text-[10px]
                                "
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </section>

            </div>



            {/* =========================================================
                HOTEL DETAIL MODAL
            ========================================================= */}

            <AnimatePresence>

                {selectedHotel && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            bg-black/45
                            backdrop-blur-[2px]
                            overflow-y-auto
                            p-4
                            sm:p-8
                        "
                        onClick={() =>
                            setSelectedHotel(null)
                        }
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                max-w-[1050px]
                                mx-auto
                                mt-5
                                sm:mt-10
                                bg-white
                                rounded-[12px]
                                overflow-hidden
                                shadow-2xl
                            "
                        >

                            <div className="
                                grid
                                grid-cols-1
                                lg:grid-cols-[1.15fr_0.85fr]
                            ">

                                <div className="
                                    min-h-[300px]
                                    lg:min-h-[600px]
                                ">

                                    <img
                                        src={selectedHotel.image}
                                        alt={selectedHotel.name}
                                        className="
                                            w-full
                                            h-full
                                            min-h-[300px]
                                            lg:min-h-[600px]
                                            object-cover
                                        "
                                    />

                                </div>


                                <div className="
                                    p-6
                                    sm:p-8
                                    lg:p-10
                                ">

                                    <div className="
                                        flex
                                        justify-between
                                        items-start
                                    ">

                                        <div>

                                            <p className="
                                                text-[9px]
                                                text-[#777]
                                                mb-2
                                            ">
                                                Hotel
                                            </p>

                                            <h2 className="
                                                text-[22px]
                                                sm:text-[28px]
                                                font-bold
                                                leading-tight
                                            ">
                                                {selectedHotel.name}
                                            </h2>

                                        </div>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedHotel(null)
                                            }
                                            className="
                                                text-[20px]
                                                text-[#777]
                                                hover:text-black
                                            "
                                        >
                                            ×
                                        </button>

                                    </div>


                                    <p className="
                                        text-[11px]
                                        text-[#777]
                                        mt-2
                                    ">
                                        📍 {selectedHotel.location}
                                    </p>


                                    <div className="
                                        flex
                                        items-center
                                        gap-2
                                        mt-4
                                    ">

                                        <div className="
                                            bg-[#E3F5EF]
                                            px-2
                                            py-1
                                            rounded
                                            text-[10px]
                                        ">
                                            {selectedHotel.rating}
                                        </div>

                                        <div className="
                                            text-[10px]
                                        ">
                                            <Star />
                                            Excellent
                                        </div>

                                    </div>


                                    <div className="
                                        h-px
                                        bg-[#E8ECE9]
                                        my-6
                                    " />


                                    <h3 className="
                                        text-[15px]
                                        font-semibold
                                    ">
                                        {selectedHotel.room}
                                    </h3>


                                    <p className="
                                        text-[10px]
                                        text-[#777]
                                        leading-5
                                        mt-3
                                    ">
                                        Enjoy a comfortable stay with
                                        modern facilities, beautiful views
                                        and all the amenities you need.
                                    </p>


                                    <div className="
                                        grid
                                        grid-cols-2
                                        gap-3
                                        mt-5
                                    ">

                                        {[
                                            "Free Wi-Fi",
                                            "Breakfast",
                                            "Swimming pool",
                                            "Air conditioning",
                                        ].map((item) => (

                                            <div
                                                key={item}
                                                className="
                                                    bg-[#F7FAF8]
                                                    rounded-[5px]
                                                    px-3
                                                    py-3
                                                    text-[9px]
                                                "
                                            >
                                                ✓ {item}
                                            </div>

                                        ))}

                                    </div>


                                    <div className="
                                        flex
                                        items-end
                                        justify-between
                                        mt-8
                                    ">

                                        <div>

                                            <span className="
                                                text-[28px]
                                                font-bold
                                            ">
                                                ${selectedHotel.price}
                                            </span>

                                            <span className="
                                                text-[10px]
                                                text-[#888]
                                            ">
                                                /night
                                            </span>

                                        </div>


                                        <button
                                            type="button"
                                            onClick={handleBook}
                                            className="
                                                bg-[#8BD5BF]
                                                hover:bg-[#70C8AE]
                                                text-white
                                                px-8
                                                py-3
                                                rounded-[5px]
                                                text-[10px]
                                                font-medium
                                                transition
                                            "
                                        >
                                            Book now
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>



            {/* =========================================================
                PAYMENT
            ========================================================= */}

            <AnimatePresence>

                {showPayment && selectedHotel && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[200]
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            p-4
                        "
                        onClick={() =>
                            setShowPayment(false)
                        }
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                            className="
                                w-full
                                max-w-[450px]
                                bg-white
                                rounded-[10px]
                                p-6
                                sm:p-8
                            "
                        >

                            <div className="
                                flex
                                items-center
                                justify-between
                                mb-6
                            ">

                                <h2 className="
                                    text-[20px]
                                    font-semibold
                                ">
                                    Payment
                                </h2>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPayment(false)
                                    }
                                    className="text-[20px]"
                                >
                                    ×
                                </button>

                            </div>


                            <div className="
                                bg-[#F4FAF8]
                                rounded-[7px]
                                p-4
                                mb-5
                            ">

                                <p className="
                                    text-[11px]
                                    font-semibold
                                ">
                                    {selectedHotel.name}
                                </p>

                                <p className="
                                    text-[10px]
                                    text-[#777]
                                    mt-1
                                ">
                                    {selectedHotel.room}
                                </p>

                                <p className="
                                    text-[18px]
                                    font-bold
                                    mt-3
                                ">
                                    ${selectedHotel.price}
                                </p>

                            </div>


                            <form onSubmit={handlePayment}>

                                <div className="space-y-4">

                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            mb-1
                                            text-[#555]
                                        ">
                                            Card Number
                                        </label>

                                        <input
                                            required
                                            inputMode="numeric"
                                            maxLength={19}
                                            value={cardNumber}
                                            onChange={(e) => {
                                                const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                                                const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
                                                setCardNumber(formatted);
                                            }}
                                            placeholder="4321 4321 4321 4321"
                                            className="
                                                w-full
                                                h-[40px]
                                                border
                                                border-[#D8DEDB]
                                                rounded
                                                px-3
                                                text-[11px]
                                                outline-none
                                                focus:border-[#80D5BD]
                                            "
                                        />

                                    </div>


                                    <div className="
                                        grid
                                        grid-cols-2
                                        gap-3
                                    ">

                                        <div>

                                            <label className="
                                                block
                                                text-[10px]
                                                mb-1
                                                text-[#555]
                                            ">
                                                Expiry Date
                                            </label>

                                            <input
                                                required
                                                inputMode="numeric"
                                                maxLength={5}
                                                value={expiry}
                                                onChange={(e) => {
                                                    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                                    if (val.length >= 3) {
                                                        val = val.slice(0, 2) + '/' + val.slice(2);
                                                    }
                                                    setExpiry(val);
                                                }}
                                                placeholder="02/27"
                                                className="
                                                    w-full
                                                    h-[40px]
                                                    border
                                                    border-[#D8DEDB]
                                                    rounded
                                                    px-3
                                                    text-[11px]
                                                    outline-none
                                                "
                                            />

                                        </div>


                                        <div>

                                            <label className="
                                                block
                                                text-[10px]
                                                mb-1
                                                text-[#555]
                                            ">
                                                CVC
                                            </label>

                                            <input
                                                required
                                                type="password"
                                                inputMode="numeric"
                                                maxLength={4}
                                                value={cvv}
                                                onChange={(e) =>
                                                    setCvv(
                                                        e.target.value.replace(/\D/g, '').slice(0, 4)
                                                    )
                                                }
                                                placeholder="123"
                                                className="
                                                    w-full
                                                    h-[40px]
                                                    border
                                                    border-[#D8DEDB]
                                                    rounded
                                                    px-3
                                                    text-[11px]
                                                    outline-none
                                                "
                                            />

                                        </div>

                                    </div>


                                    <div>

                                        <label className="
                                            block
                                            text-[10px]
                                            mb-1
                                            text-[#555]
                                        ">
                                            Name on Card
                                        </label>

                                        <input
                                            required
                                            value={cardName}
                                            onChange={(e) =>
                                                setCardName(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Cozy Bit"
                                            className="
                                                w-full
                                                h-[40px]
                                                border
                                                border-[#D8DEDB]
                                                rounded
                                                px-3
                                                text-[11px]
                                                outline-none
                                            "
                                        />

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    className="
                                        w-full
                                        h-[42px]
                                        mt-6
                                        bg-[#8BD5BF]
                                        hover:bg-[#70C8AE]
                                        text-white
                                        rounded
                                        text-[10px]
                                        font-medium
                                        transition
                                    "
                                >
                                    Pay & Confirm
                                </button>

                            </form>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>



            {/* =========================================================
                ADD NEW CARD
            ========================================================= */}

            <AnimatePresence>

                {showAddCard && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[200]
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            p-4
                        "
                    >

                        <motion.div
                            initial={{
                                scale: 0.9,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            className="
                                bg-white
                                w-full
                                max-w-[400px]
                                rounded-[10px]
                                p-7
                            "
                        >

                            <div className="
                                flex
                                justify-between
                                items-center
                                mb-5
                            ">

                                <h2 className="
                                    text-[18px]
                                    font-semibold
                                ">
                                    Add a new Card
                                </h2>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowAddCard(false)
                                    }
                                    className="text-[20px]"
                                >
                                    ×
                                </button>

                            </div>


                            <input
                                placeholder="Card Number"
                                inputMode="numeric"
                                maxLength={19}
                                onInput={(e) => {
                                    const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                                    e.target.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
                                }}
                                className="
                                    w-full
                                    h-[40px]
                                    border
                                    border-[#D8DEDB]
                                    rounded
                                    px-3
                                    mb-3
                                    text-[11px]
                                    outline-none
                                "
                            />


                            <div className="
                                grid
                                grid-cols-2
                                gap-3
                                mb-3
                            ">

                                <input
                                    placeholder="Expiry Date (MM/YY)"
                                    inputMode="numeric"
                                    maxLength={5}
                                    onInput={(e) => {
                                        let val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                        if (val.length >= 3) {
                                            val = val.slice(0, 2) + '/' + val.slice(2);
                                        }
                                        e.target.value = val;
                                    }}
                                    className="
                                        h-[40px]
                                        border
                                        border-[#D8DEDB]
                                        rounded
                                        px-3
                                        text-[11px]
                                        outline-none
                                    "
                                />

                                <input
                                    placeholder="CVC"
                                    type="password"
                                    inputMode="numeric"
                                    maxLength={4}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
                                    }}
                                    className="
                                        h-[40px]
                                        border
                                        border-[#D8DEDB]
                                        rounded
                                        px-3
                                        text-[11px]
                                        outline-none
                                    "
                                />

                            </div>


                            <input
                                placeholder="Name on Card"
                                className="
                                    w-full
                                    h-[40px]
                                    border
                                    border-[#D8DEDB]
                                    rounded
                                    px-3
                                    mb-5
                                    text-[11px]
                                    outline-none
                                "
                            />


                            <button
                                type="button"
                                onClick={() =>
                                    setShowAddCard(false)
                                }
                                className="
                                    w-full
                                    h-[40px]
                                    bg-[#8BD5BF]
                                    text-white
                                    rounded
                                    text-[10px]
                                "
                            >
                                Add Card
                            </button>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>



            {/* =========================================================
                BOOKING CONFIRMATION
            ========================================================= */}

            <AnimatePresence>

                {showConfirmation && selectedHotel && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[300]
                            bg-black/50
                            flex
                            items-center
                            justify-center
                            p-4
                        "
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            className="
                                bg-white
                                w-full
                                max-w-[600px]
                                rounded-[10px]
                                overflow-hidden
                            "
                        >

                            <div className="
                                bg-[#D5EFE7]
                                p-7
                                sm:p-10
                            ">

                                <div className="
                                    w-[55px]
                                    h-[55px]
                                    rounded-full
                                    bg-[#8BD5BF]
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    text-[25px]
                                    mx-auto
                                ">
                                    ✓
                                </div>


                                <h2 className="
                                    text-[22px]
                                    sm:text-[27px]
                                    font-bold
                                    text-center
                                    mt-5
                                ">
                                    Booking confirmed!
                                </h2>


                                <p className="
                                    text-[10px]
                                    text-[#55746B]
                                    text-center
                                    mt-2
                                ">
                                    Your reservation has been successfully
                                    completed.
                                </p>

                            </div>


                            <div className="p-7 sm:p-9">

                                <div className="
                                    flex
                                    gap-4
                                    items-center
                                ">

                                    <img
                                        src={selectedHotel.image}
                                        alt=""
                                        className="
                                            w-[100px]
                                            h-[75px]
                                            object-cover
                                            rounded
                                        "
                                    />

                                    <div>

                                        <h3 className="
                                            text-[13px]
                                            font-semibold
                                        ">
                                            {selectedHotel.name}
                                        </h3>

                                        <p className="
                                            text-[9px]
                                            text-[#777]
                                            mt-1
                                        ">
                                            {selectedHotel.location}
                                        </p>

                                    </div>

                                </div>


                                <div className="
                                    grid
                                    grid-cols-2
                                    gap-4
                                    mt-7
                                    text-[10px]
                                ">

                                    <div>

                                        <p className="text-[#888]">
                                            Check in
                                        </p>

                                        <p className="font-medium mt-1">
                                            Thu, Dec 04
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-[#888]">
                                            Check out
                                        </p>

                                        <p className="font-medium mt-1">
                                            Fri, Dec 05
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-[#888]">
                                            Room
                                        </p>

                                        <p className="font-medium mt-1">
                                            {selectedHotel.room}
                                        </p>

                                    </div>


                                    <div>

                                        <p className="text-[#888]">
                                            Total
                                        </p>

                                        <p className="font-bold mt-1">
                                            ${selectedHotel.price}
                                        </p>

                                    </div>

                                </div>


                                <div className="
                                    mt-7
                                    border
                                    border-[#DDE7E3]
                                    border-dashed
                                    rounded
                                    p-4
                                    text-center
                                ">

                                    <p className="
                                        text-[9px]
                                        text-[#888]
                                    ">
                                        Booking reference
                                    </p>

                                    <p className="
                                        text-[15px]
                                        font-bold
                                        tracking-[3px]
                                        mt-1
                                    ">
                                        GLB-728491
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => {

                                        setShowConfirmation(false);
                                        setSelectedHotel(null);

                                    }}
                                    className="
                                        w-full
                                        h-[42px]
                                        bg-[#8BD5BF]
                                        hover:bg-[#70C8AE]
                                        text-white
                                        rounded
                                        text-[10px]
                                        mt-6
                                    "
                                >
                                    Done
                                </button>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </Layout>
    );
}