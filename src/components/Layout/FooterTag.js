import classes from './FooterTag.module.css';

let a = " Made with &#10084; by Shashi";
const FooterTag = () => {
    return (
        <div className={classes.foot}>
            <h3>Made with ❤️ by Shashi Kumar</h3>
        </div>
    );
};

export default FooterTag;