<style scoped>
/* The loader container */
.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    margin-top: -80px;
    margin-left: -80px;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.cubes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(-135deg);
    animation: cubes 8s cubic-bezier(0, 0, 1, 1) infinite;
}

/* The cube */
.cube {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    opacity: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    animation: cube 2s cubic-bezier(0.64, 0.21, 0.42, 0.85) infinite;
}

@keyframes cube {
    0% {
        opacity: 0;
        transform: translateZ(100px);
    }

    40%,
    60% {
        opacity: 1;
        transform: translateZ(10px);
    }

    100% {
        opacity: 0;
        transform: translateZ(-100px);
    }
}

/* The side */
.side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

/* back */
.side:nth-child(1) {
    transform: rotateX(-180deg) translateZ(10px);
    background-color: #1e3f57;
}

/* left side */
.side:nth-child(2) {
    transform: rotateY(-90deg) translateZ(10px);
    background-color: #6bb2cd;
}

/* right side */
.side:nth-child(3) {
    transform: rotateY(90deg) translateZ(10px);
    background-color: #6bb2cd;
}

/* top side */
.side:nth-child(4) {
    transform: rotateX(90deg) translateZ(10px);
    background-color: #3c617d;
}

/* bottom side */
.side:nth-child(5) {
    transform: rotateX(-90deg) translateZ(10px);
    background-color: #3c617d;
}

/* top */
.side:nth-child(6) {
    transform: translateZ(10px);
    background-color: #1e3f57;
}

.cube:nth-child(8n + 1) {
    left: 20px;
}

.cube:nth-child(8n + 2) {
    left: 40px;
}

.cube:nth-child(8n + 3) {
    left: 60px;
}

.cube:nth-child(8n + 4) {
    left: 80px;
}

.cube:nth-child(8n + 5) {
    left: 100px;
}

.cube:nth-child(8n + 6) {
    left: 120px;
}

.cube:nth-child(8n + 7) {
    left: 140px;
}

.cube:nth-child(8),
.cube:nth-child(9),
.cube:nth-child(10),
.cube:nth-child(11),
.cube:nth-child(12),
.cube:nth-child(13),
.cube:nth-child(14),
.cube:nth-child(15) {
    top: 20px;
}

.cube:nth-child(16),
.cube:nth-child(17),
.cube:nth-child(18),
.cube:nth-child(19),
.cube:nth-child(20),
.cube:nth-child(21),
.cube:nth-child(22),
.cube:nth-child(23) {
    top: 40px;
}

.cube:nth-child(24),
.cube:nth-child(25),
.cube:nth-child(26),
.cube:nth-child(27),
.cube:nth-child(28),
.cube:nth-child(29),
.cube:nth-child(30),
.cube:nth-child(31) {
    top: 60px;
}

.cube:nth-child(32),
.cube:nth-child(33),
.cube:nth-child(34),
.cube:nth-child(35),
.cube:nth-child(36),
.cube:nth-child(37),
.cube:nth-child(38),
.cube:nth-child(39) {
    top: 80px;
}

.cube:nth-child(40),
.cube:nth-child(41),
.cube:nth-child(42),
.cube:nth-child(43),
.cube:nth-child(44),
.cube:nth-child(45),
.cube:nth-child(46),
.cube:nth-child(47) {
    top: 100px;
}

.cube:nth-child(48),
.cube:nth-child(49),
.cube:nth-child(50),
.cube:nth-child(51),
.cube:nth-child(52),
.cube:nth-child(53),
.cube:nth-child(54),
.cube:nth-child(55) {
    top: 120px;
}

.cube:nth-child(56),
.cube:nth-child(57),
.cube:nth-child(58),
.cube:nth-child(59),
.cube:nth-child(60),
.cube:nth-child(61),
.cube:nth-child(62),
.cube:nth-child(63) {
    top: 140px;
}

/* keyframe delays */
.cube:nth-child(1),
.cube:nth-child(8) {
    animation-delay: 50ms;
}

.cube:nth-child(2),
.cube:nth-child(9),
.cube:nth-child(16) {
    animation-delay: 100ms;
}

.cube:nth-child(3),
.cube:nth-child(10),
.cube:nth-child(17),
.cube:nth-child(24) {
    animation-delay: 150ms;
}

.cube:nth-child(4),
.cube:nth-child(11),
.cube:nth-child(18),
.cube:nth-child(25),
.cube:nth-child(32) {
    animation-delay: 200ms;
}

.cube:nth-child(5),
.cube:nth-child(12),
.cube:nth-child(19),
.cube:nth-child(26),
.cube:nth-child(33),
.cube:nth-child(40) {
    animation-delay: 250ms;
}

.cube:nth-child(6),
.cube:nth-child(13),
.cube:nth-child(20),
.cube:nth-child(27),
.cube:nth-child(34),
.cube:nth-child(41),
.cube:nth-child(48) {
    animation-delay: 300ms;
}

.cube:nth-child(7),
.cube:nth-child(14),
.cube:nth-child(21),
.cube:nth-child(28),
.cube:nth-child(35),
.cube:nth-child(42),
.cube:nth-child(49),
.cube:nth-child(56) {
    animation-delay: 350ms;
}

.cube:nth-child(15),
.cube:nth-child(22),
.cube:nth-child(29),
.cube:nth-child(36),
.cube:nth-child(43),
.cube:nth-child(50),
.cube:nth-child(57) {
    animation-delay: 400ms;
}

.cube:nth-child(23),
.cube:nth-child(30),
.cube:nth-child(37),
.cube:nth-child(44),
.cube:nth-child(51),
.cube:nth-child(58) {
    animation-delay: 450ms;
}

.cube:nth-child(31),
.cube:nth-child(38),
.cube:nth-child(45),
.cube:nth-child(52),
.cube:nth-child(59) {
    animation-delay: 500ms;
}

.cube:nth-child(39),
.cube:nth-child(46),
.cube:nth-child(53),
.cube:nth-child(60) {
    animation-delay: 550ms;
}

.cube:nth-child(47),
.cube:nth-child(54),
.cube:nth-child(61) {
    animation-delay: 600ms;
}

.cube:nth-child(55),
.cube:nth-child(62) {
    animation-delay: 650ms;
}

.cube:nth-child(63) {
    animation-delay: 700ms;
}
</style>

<template>
    <div class="loader">
        <div class="cubes">
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
            <div class="cube">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>
        </div>
    </div>
</template>
