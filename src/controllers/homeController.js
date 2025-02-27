const connection = require("../config/connectDB");
const jwt = require('jsonwebtoken');
const md5 = require("md5");
const e = require("express");
require('dotenv').config();


const homePage = async (req, res) => {
    const [settings] = await connection.query('SELECT `app` FROM admin');
    let app = settings[0].app;
    return res.render("home/index.ejs", { app });
}

const promotionPage = async (req, res) => {
    return res.render("checkIn/promotion.ejs");
}

const checkDes = async (req, res) => {
    return res.render("checkIn/checkDes.ejs");
}

const checkRecord = async (req, res) => {
    return res.render("checkIn/checkRecord.ejs");
}

const addBank = async (req, res) => {
    return res.render("wallet/addbank.ejs");
}

// myactivity
const myactivityPage = async (req, res) => {
    return res.render("myactivity/myactivity.ejs");
}

const promotionmyTeamPage = async (req, res) => {
    return res.render("myactivity/myTeam.ejs");
}

const promotionDesPage = async (req, res) => {
    return res.render("myactivity/promotionDes.ejs");
}

const tutorialPage = async (req, res) => {
    return res.render("myactivity/tutorial.ejs");
}

const bonusRecordPage = async (req, res) => {
    return res.render("myactivity/bonusrecord.ejs");
}

// wallet
const walletPage = async (req, res) => {
    return res.render("wallet/index.ejs");
}

const rechargePage = async (req, res) => {
    return res.render("wallet/recharge.ejs");
}

const rechargerecordPage = async (req, res) => {
    return res.render("wallet/rechargerecord.ejs");
}

const withdrawalPage = async (req, res) => {
    return res.render("wallet/withdrawal.ejs");
}

const withdrawalrecordPage = async (req, res) => {
    return res.render("wallet/withdrawalrecord.ejs");
}

// member page
const accountPage = async (req, res) => {
    let auth = req.cookies.auth;
    const [user] = await connection.query('SELECT `level` FROM users WHERE `token` = ? ', [auth]);
    let level = user[0].level;
    return res.render("member/index.ejs", { level });
}
const aboutPage = async (req, res) => {
    return res.render("member/about/index.ejs");
}

const privacyPolicy = async (req, res) => {
    return res.render("member/about/privacyPolicy.ejs");
}

const newtutorial = async (req, res) => {
    return res.render("member/newtutorial.ejs");
}

const forgot = async (req, res) => {
    let auth = req.cookies.auth;
    const [user] = await connection.query('SELECT `time_otp` FROM users WHERE token = ? ', [auth]);
    let time = user[0].time_otp;
    return res.render("member/forgot.ejs", { time });
}

const redenvelopes = async (req, res) => {
    return res.render("member/redenvelopes.ejs");
}

const riskAgreement = async (req, res) => {
    return res.render("member/about/riskAgreement.ejs");
}

const keFuMenu = async (req, res) => {
    let auth = req.cookies.auth;

    const [users] = await connection.query('SELECT `level`, `ctv` FROM users WHERE token = ?', [auth]);

    let telegram = '';
    if (users.length == 0) {
        let [settings] = await connection.query('SELECT `telegram`, `cskh` FROM admin');
        telegram = settings[0].telegram;
    } else {
        if (users[0].level != 0) {
            var [settings] = await connection.query('SELECT * FROM admin');
        } else {
            var [check] = await connection.query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);
            if (check.length == 0) {
                var [settings] = await connection.query('SELECT * FROM admin');
            } else {
                var [settings] = await connection.query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);
            }
        }
        telegram = settings[0].telegram;
    }

    return res.render("keFuMenu.ejs", { telegram });
}

const myProfilePage = async (req, res) => {
    return res.render("member/myProfile.ejs");
}

module.exports = {
    homePage,
    promotionPage,
    myactivityPage,
    walletPage,
    accountPage,
    myProfilePage,
    promotionmyTeamPage,
    promotionDesPage,
    tutorialPage,
    bonusRecordPage,
    keFuMenu,
    rechargePage,
    rechargerecordPage,
    withdrawalPage,
    withdrawalrecordPage,
    aboutPage,
    privacyPolicy,
    riskAgreement,
    newtutorial,
    redenvelopes,
    forgot,
    checkDes,
    checkRecord,
    addBank
}