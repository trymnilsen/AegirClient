module App.View.Layout {
    // +-----------+-----------------------------+----------+
    // |           |                             |  RIGHT   |
    // |           |                             |  UP      |
    // |           |                             +----------+
    // |   LEFT    |                             |          |
    // |   UP      |                             |  RIGHT   |
    // +-----------+                             |  CENTER  |
    // |           |                             |          |
    // |           |         CENTER              +----------+
    // |   LEFT    |                             |          |
    // |   CENTER  |                             |  RIGHT   |
    // |           |                             |  DOWN    |
    // +-----------+                             |          |
    // |   LEFT    |                             |          |
    // |   DOWN    |                             |          |
    // +-----------+-------------+-------------+-+----------+
    // |        DOWNLEFT         |   DOWN      |   DOWN     |
    // |                         |   CENTER    |   RIGHT    |
    // +-------------------------+-------------+------------+
    export enum ELayoutPosition {
        LEFTUP,
        LEFTDOWN,
        LEFTCENTER,
        DOWNLEFT,
        DOWNCENTER,
        DOWNRIGHT,
        RIGHTDOWN,
        RIGHTCENTER,
        RIGHTUP,
        CENTER
    }
}