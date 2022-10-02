<template>
    <div>
        <!--  -->
        <header>
            <nav class="container h-20 max-w-full  bg-transparent backdrop-blur-sm fixed z-20 flex justify-between ">
                <div class="logo my-auto">
                    <img src="../../asset/images/logo.svg" alt="">
                </div>
                <input type="checkbox" id="check">
                <div class="btn">
                    <label for="check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div class="menu inline my-auto text-p1zz leading-7 ">
                    <a href="" class="menua activ">Home</a>
                    <a href="" class="menua activ">Study Program</a>
                    <div class="dropdown relative inline-block">
                        <a href="" class=" menua activ dropbtn">
                            Student Data <i>></i>
                        </a>
                        <div class="content hidden absolute w-36 text-p2 top-[34px] z-10">
                            <a href="" class="menua py-3 px-2 block activ">Kelas 10</a>
                            <a href="" class="menua py-3 px-2 block activ">Kelas 11</a>
                            <a href="" class="menua py-3 px-2 block activ">Kelas 12</a>
                        </div>
                    </div>
                    <div class="dropdown relative inline-block">
                        <a href="" class="menua activ dropbtn">
                            Organization <i>></i>
                        </a>
                        <div class="content hidden absolute w-36 text-p2 top-[34px] z-10">
                            <a href="" class="menua py-3 px-2 block activ">OSIS</a>
                            <a href="" class="menua py-3 px-2 block activ">PRAMUKA</a>
                            <a href="" class="menua py-3 px-2 block activ">PASKIBRA</a>
                        </div>
                    </div>
                    <a href="" class="menua activ">Info</a>
                    <a href="" class="menua activ">News</a>
                    <a href="" class="menua activ">About</a>
                    <a href="" class="menua activ">Contact</a>
                </div>
            </nav>
        </header>
        <!--  -->
    </div>
</template>
<script>
export default {

}
</script>
<style>
.dropdown:hover .content {
    display: block;
}

#check,
.btn {
    display: none;
}



@media only screen and (max-width: 1080px) {

    .btn {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
    }

    .btn label {
        display: inline-block;
        width: 80px;
        height: 70px;
        padding: 25px;
    }

    .btn label span {
        display: block;
        height: 10px;
        width: 30px;
        border-top: 3px solid white;
    }

    .btn label:hover,
    #check:checked~.btn label {
        transition: all .5s ease;
    }

    .menu {
        position: absolute;
        display: block;
        text-align: center;
        width: 50%;
        background-color: #10171D;
        top: 70px;
        right: 0;
        overflow-y: hidden;
        transition: all .5s ease-in;
    }

    .menu a {
        display: block;
    }

    #check:not(:checked)~.menu {
        height: 0px;
    }

    #check:checked~.menu {
        height: 100vh;
        overflow-y: auto;
    }

    .menu .dropdown {
        float: none;
        width: 100%;
    }

    .menu .content {
        position: relative;
        background-color: #10171D;
        top: 0;
        left: 0;
    }


    .menu .content a {
        color: white;
    }











}
</style>