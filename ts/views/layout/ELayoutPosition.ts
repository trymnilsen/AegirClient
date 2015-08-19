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
    // |           |                             |          |
    // |           |                             |          |
    // |           |                             |          |
    // +-----------+-------------+-------------+-+----------+
    // |        DOWNLEFT         |   DOWN      |   DOWN     |
    // |                         |   CENTER    |   RIGHT    |
    // +-------------------------+-------------+------------+
    export enum ELayoutPosition {
        LEFTUP,
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