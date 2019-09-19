module.exports = class Utils {
    static parseMemberType(type) {
        let member = '';
        switch (type) {
            case 1:
                member = 'xmt'
                break;
            default:
                break;
        }
        return member;
    }
}
