module App.View.Layout {
    // +-----------+-----------------------------+----------+
    // |           |                             |  RIGHT   |
    // |           |                             |  UP      |
    // |           |                             +----------+
    // |   LEFT    |                             |  RIGHT   |
    // |   UP      |                             |  CENTER  |
    // |           |                             |          |
    // |           |                             +----------+
    // +-----------+         CENTER              |          |
    // |           |                             |          |
    // |           |                             |  RIGHT   |
    // |   LEFT    |                             |  DOWN    |
    // |   DOWN    |                             |          |
    // |           |                             |          |
    // |           |                             |          |
    // +-----------+-------------+-------------+-+----------+
    // |        DOWNLEFT         |   DOWN      |   DOWN     |
    // |                         |   CENTER    |   RIGHT    |
    // +-------------------------+-------------+------------+
    export enum ELayoutPosition {
        LEFTUP,
        LEFTDOWN,
        DOWNLEFT,
        DOWNCENTER,
        DOWNRIGHT,
        RIGHTDOWN,
        RIGHTCENTER,
        RIGHTUP,
        CENTER
    }
}