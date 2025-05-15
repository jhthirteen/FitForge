import { useState } from 'react';

function HomeButtons({ label, onClick, className }) {
    return(
        <button className={className} onClick={onClick}>{label}</button>
    );
}

export default HomeButtons;