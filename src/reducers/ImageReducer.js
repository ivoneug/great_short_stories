export default () => {
    const storage = {
        authors: {},
        articles: {
            story0: require('./articleImages/story0.jpg'),
            story1: require('./articleImages/story1.jpg'),
            story2: require('./articleImages/story2.jpg'),
            story5: require('./articleImages/story5.jpg'),
            story6: require('./articleImages/story6.jpg'),
            story7: require('./articleImages/story7.jpg'),
            story9: require('./articleImages/story9.jpg'),
            story10: require('./articleImages/story10.jpg'),
            story11: require('./articleImages/story11.jpg'),
            story14: require('./articleImages/story14.jpg'),
            story15: require('./articleImages/story15.jpg'),
            story16: require('./articleImages/story16.jpg'),
            story17: require('./articleImages/story17.jpg'),
            story18: require('./articleImages/story18.jpg'),
            story19: require('./articleImages/story19.jpg'),
            story21: require('./articleImages/story21.jpg'),
            story22: require('./articleImages/story22.jpg'),
            story23: require('./articleImages/story23.jpg'),
            story24: require('./articleImages/story24.jpg'),
            story26: require('./articleImages/story26.jpg'),
            story27: require('./articleImages/story27.jpg'),
            story28: require('./articleImages/story28.jpg'),
            story29: require('./articleImages/story29.jpg'),
            story31: require('./articleImages/story31.jpg'),
            story32: require('./articleImages/story32.jpg'),
            story33: require('./articleImages/story33.jpg'),
            story34: require('./articleImages/story34.jpg'),
            story35: require('./articleImages/story35.jpg'),
            story36: require('./articleImages/story36.jpg'),
            story37: require('./articleImages/story37.jpg'),
            story38: require('./articleImages/story38.jpg'),
            story39: require('./articleImages/story39.jpg'),
            story40: require('./articleImages/story40.jpg'),
            story41: require('./articleImages/story41.jpg'),
            story42: require('./articleImages/story42.jpg'),
            story43: require('./articleImages/story43.jpg'),
            story44: require('./articleImages/story44.jpg'),
            story45: require('./articleImages/story45.jpg'),
            story47: require('./articleImages/story47.jpg'),
            story48: require('./articleImages/story48.jpg'),
            story50: require('./articleImages/story50.jpg'),
            story52: require('./articleImages/story52.jpg'),
            story53: require('./articleImages/story53.jpg'),
            story54: require('./articleImages/story54.jpg'),
            story55: require('./articleImages/story55.jpg'),
            story62: require('./articleImages/story62.jpg'),
            story65: require('./articleImages/story65.jpg'),
            story66: require('./articleImages/story66.jpg'),
            story70: require('./articleImages/story70.jpg'),
            story75: require('./articleImages/story75.jpg'),
            story78: require('./articleImages/story78.jpg'),
            story82: require('./articleImages/story82.jpg'),
            story83: require('./articleImages/story83.jpg'),
            story84: require('./articleImages/story84.jpg'),
            story86: require('./articleImages/story86.jpg'),
            story87: require('./articleImages/story87.jpg'),
            story89: require('./articleImages/story89.jpg'),
            story95: require('./articleImages/story95.jpg'),
            story98: require('./articleImages/story98.jpg'),
            story99: require('./articleImages/story99.jpg'),
            story102: require('./articleImages/story102.jpg'),
            story103: require('./articleImages/story103.jpg'),
            story105: require('./articleImages/story105.jpg'),
            story106: require('./articleImages/story106.jpg'),
            story107: require('./articleImages/story107.jpg'),
            story109: require('./articleImages/story109.jpg'),
            story110: require('./articleImages/story110.jpg'),
            story116: require('./articleImages/story116.jpg'),
            story118: require('./articleImages/story118.jpg'),
            story121: require('./articleImages/story121.jpg'),
            stor126: require('./articleImages/story126.jpg'),
            story127: require('./articleImages/story127.jpg'),
            story128: require('./articleImages/story128.jpg'),
            story129: require('./articleImages/story129.jpg'),
            story130: require('./articleImages/story130.jpg'),
            story131: require('./articleImages/story131.jpg'),
            story133: require('./articleImages/story133.jpg'),
            story137: require('./articleImages/story137.jpg'),
            story141: require('./articleImages/story141.jpg'),
            story142: require('./articleImages/story142.jpg'),
            story144: require('./articleImages/story144.jpg'),
            story145: require('./articleImages/story145.jpg'),
            story150: require('./articleImages/story150.jpg'),
            story151: require('./articleImages/story151.jpg'),
            story152: require('./articleImages/story152.jpg'),
            story153: require('./articleImages/story153.jpg'),
            story154: require('./articleImages/story154.jpg'),
            story157: require('./articleImages/story157.jpg'),
            story158: require('./articleImages/story158.jpg'),
            story159: require('./articleImages/story159.jpg')
        },
        getArticleImage: (name) => {
            const key = name.replace('.jpg', '');
            return storage.articles[key];
        }
    };

    return storage;
};
