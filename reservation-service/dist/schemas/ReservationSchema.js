"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.makeReservationSchema = () => {
    const schema = mongoose.Schema;
    const reservationSchema = new schema({
        flightNumber: {
            type: String,
            required: [true, "flightNumber is re`quired "],
            validate: {
                validator: function (v) {
                    if (v.length <= 4) {
                        return false;
                    }
                },
                message: "flightNumber is too short must be longer than 4 characters ",
            }
        },
        username: {
            type: String,
            required: [true, "username is required "],
            validate: {
                validator: function (v) {
                    if (v.length <= 4) {
                        return false;
                    }
                },
                message: "username is too short must be longer than 4 characters ",
            }
        },
        seatNumber: {
            type: String,
            required: [false, "seatnumber is required"]
        }
    });
    reservationSchema.index({ flightNumber: 1, username: 1 }, { unique: true });
    return reservationSchema;
};
//# sourceMappingURL=ReservationSchema.js.map