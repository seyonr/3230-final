<script>
import Header from '../components/header/Header.vue';
</script>

<template>
    <div class="main-div">
        <div class="left-div">
            <h1>Welcome to Singaraj Motors!</h1>
            <p>Find your next dream car at unbeatable prices. Whether you're looking for a fuel-efficient compact or a luxury SUV, Velocity Motors has a wide range of new and pre-owned vehicles ready for you to explore. Start your journey today.</p>
            <div class="button-div">
                <RouterLink to="/carlisiting" class="button-s">Browse Cars</RouterLink>
                <RouterLink to="/paymentcalc" class="button-s">Estimate Payments</RouterLink>
                
            </div>
        </div>
        <div class="right-div">
            <img src="../../public/sportscar.svg" alt="Rolls Royce Image">
        </div>
    </div>

    <div class="about-div">
        <div class="about-left">
            <img src="../../public/about-img.svg" alt="Team Image">
        </div>

        <div class="about-right">
            <h1>About Us</h1>
            <p>We started Singaraj Motors with a simple goal: to make car buying easier, more transparent, and genuinely enjoyable for everyone. Over the years, we've built a reputation for offering high-quality vehicles, honest pricing, and exceptional customer service that goes above and beyond expectations. Our team is made up of car lovers, experienced sales professionals, and dedicated service experts who are passionate about helping you find the perfect vehicle for your lifestyle and budget.</p>
            <p>At Singaraj Motors, we believe that buying a car should never feel overwhelming or pressured. That's why we've created a customer-first environment where your needs come first, and your satisfaction drives everything we do. Whether you're shopping for your first car, trading in your current vehicle, or simply exploring financing options, our team is here to guide you every step of the way.</p>
            <p>We offer a diverse selection of both new and pre-owned vehicles — from reliable everyday commuters to powerful trucks and sleek luxury models. Each car is carefully inspected and maintained to meet our highest quality standards. And with flexible financing plans, trade-in options, and expert advice, we're here to make sure you drive away feeling confident and proud of your purchase.</p>
            <p>Thank you for considering Singaraj Motors. We're not just selling cars — we're building relationships that last a lifetime.</p>
        </div>
    </div>
</template>

<style scoped>
.main-div{
    padding: 30px 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #EEE5E9;
    color: #7C7C7C;

}

.left-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}

.right-div{
    display: flex;
    justify-content: end;
}

.right-div img{
    border-radius: 20px;
    width: 700px;
    height: auto;
}

.left-div h1{
    font-size: 50px;
    text-align: center;
}

.left-div p{
    font-size: 20px;
    text-align: center;
}

.button-div{
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.button-s{
    text-decoration: none;
    color: black;
    background-color: #92DCE5;
    border: none;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.button-s:hover{
    background-color: #a3ccd2;
    scale: 1.1;
}

@media screen and (max-width: 1100px){
    .right-div img{
        width: 400px;
    }

    .left-div h1{
        font-size: 30px;
    }

    .left-div p{
        font-size: 17px;
    }

    .button-div{
        font-size: 15px;
    }
}

@media screen and (max-width: 780px){
    .main-div{
        grid-template-columns: 1fr;
    }

    .left-div{
        order: 3;
    }

    .right-div{
        justify-content: center;
    }
}

@media screen and (max-width: 650px){
    .left-div h1{
        font-size: 25px;
    }

    .left-div p{
        font-size: 15px;
    }

    .button-div{
        font-size: 13px;
    }
}

/* -------------------------- */
/* -------------------------- */
/* About us Styling */
.about-div{
    padding: 30px 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #7C7C7C;
    color: #EEE5E9;
}

.about-left{
    display: flex;
    justify-content: start;
}

.about-left img{
    width: 700px;
    height: auto;
}

.about-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-right h1{
    font-size: 25px;
}

.about-right p{
    margin-top: 10px;
    font-size: 16px;
    text-align: justify;
}

@media screen and (max-width: 1100px){
    .about-div{
        grid-template-columns: 1fr;
    }

    .about-left{
        justify-content: center;
    }

    .about-left img{
        width: 400px;
    }

    .about-right p{
        text-align: center;
    }
}

@media screen and (max-width: 650px){
    .about-right h1{
        font-size: 20px;
    }

    .about-right p{
        font-size: 15px;
    }
}
</style>