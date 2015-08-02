module App.View.Layout {
    // +-----------+-----------------------------+----------+
    // |           |                             |  RIGHT   |
    // |           |                             |  UP      |
    // |           |                             +----------+
    // |   LEFT    |                             |  RIGHT   |
    // |   UP      |                             |  UP      |
    // |           |                             |  CENTER  |
    // |           |                             +----------+
    // +-----------+         CENTER              |          |
    // |           |                             |          |
    // |           |                             |  RIGHT   |
    // |   LEFT    |                             |  DOWN    |
    // |   CENTER  |                             |  CENTER  |
    // |           |                             |          |
    // |           |                             |          |
    // +-----------+-------------+-------------+-+----------+
    // |        LEFT DOWN        |   CENTER    |   RIGHT    |
    // |                         |   DOWN      |   DOWN     |
    // +-------------------------+-------------+------------+
    export enum ELayoutPosition {
        LEFTUP,
        LEFTCENTER,
        LEFTDOWN,
        CENTERDOWN,
        RIGHTDOWN,
        RIGHTDOWNCENTER,
        RIGHTUPCENTER,
        RIGHTUP,
        CENTER
    }
}