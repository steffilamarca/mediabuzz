import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import HTMLFlipBook from 'react-pageflip';

const PageCover = React.forwardRef((props, ref) => {

    return (
        <div className="page page-cover" ref={ref} data-density="soft">
        <div className="page-content">
            <h2>{props.children}</h2>
        </div>
        </div>
    );
    });

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
        <div className="book-page-wrapper">
            <img className="book-page" src={`/images/eMags/2022/page-${props.number}.png`} alt={`Asian Marketing Page ${props.number}`}></img>
        </div>
    </div>
  );
});

const Advertising = () => {

    const pages = Array.from({ length: 10 }, (_, index) => index + 1); // Create an array from 1 to 10
    

    // const [page, setPage] = useState(0);
    // const [totalPage, setTotalPage] = useState(0);
    const flipBookRef = useRef(null);

    // const nextButtonClick = () => {
    //     const flipBook = flipBookRef.current;
    //     if (flipBook && flipBook.flipNext) {
    //     flipBook.flipNext();
    //     }
    // };

    // const prevButtonClick = () => {
    //     const flipBook = flipBookRef.current;
    //     if (flipBook && flipBook.flipPrev) {
    //     flipBook.flipPrev();
    //     }
    // };

    const onPage = e => {
        setPage(e.data);
    };

    useEffect(() => {
        const flipBook = flipBookRef.current;
        if (flipBook && flipBook.getPageFlip) {
        setTotalPage(flipBook.getPageFlip().getPageCount());
        }
    }, []);

  return (
    <div className="advertising px-3 px-lg-5 mb-4">
        <div className="breadcrumb px-3 py-2 rounded-2">You are here:&nbsp;<NavLink exact to="/">Home</NavLink> &nbsp; &gt; &nbsp;<span className="breadcrumb-selected">Advertising</span></div>
        <h2 className="page-heading">MEDIA KIT 2022</h2>
        <h6>Also view: <NavLink to="/about-us">About Us</NavLink></h6>
        <div className="demo-book">
            <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onPage}
            ref={flipBookRef}
            >
            <PageCover>
                <div className="book-cover-wrapper">
                    <img className="book-cover" src="/images/eMags/2022/cover.png" alt="2022 Asian Marketing Cover"></img>
                </div>
            </PageCover>
            {pages.map((pageNumber) => (
                <Page key={pageNumber} number={pageNumber} />
                ))}
            <PageCover>
                <div className="book-backpage-wrapper">
                    <img className="book-backpage" src="/images/eMags/backpage.png" alt="Asian Marketing Backpage"></img>
                </div>
            </PageCover>
            </HTMLFlipBook>
        </div>
        {/* <div className="container">
            <div>
            <button type="button" onClick={prevButtonClick}>
                Previous page
            </button>
            [<span>{page}</span> of <span>{totalPage}</span>]
            <button type="button" onClick={nextButtonClick}>
                Next page
            </button>
            </div>
        </div> */}
    </div>
  );
};

export default Advertising;
