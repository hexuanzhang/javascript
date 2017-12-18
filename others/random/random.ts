// 随机生成 (min, max) 之间的整数
const random = () => {
    // Math.floor(Math.random()*(max - min - 1) + min + 1)
    return Math.ceil(Math.random()*(max - min - 1) + min);
};

// 随机生成 [min, max) 之间的整数
const random = () => {
    // Math.floor(Math.random()*(max - min) + min)
    // Number.parseInt(Math.random()*(max - min) + min, 10)
    return Math.ceil(Math.random()*(max - min) + min - 1);
};

// 随机生成 (min, max] 之间的整数
const random = () => {
    // Math.floor(Math.random()*(max - min) + min + 1)
    return Math.ceil(Math.random()*(max - min) + min);
};

// 随机生成 [min, max] 之间的整数
const random = () => {
    // Math.floor(Math.random()*(max - min + 1) + min)
    // Math.round(Math.random()*(max - min) + min)
    return Math.ceil(Math.random()*(max - min + 1) + min - 1);
};