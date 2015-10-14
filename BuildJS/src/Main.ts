class Main extends egret.Sprite {

    public constructor() {
        super();
    }
}

enum TYPE {
	A = 1,
	B = 0x10
};

class CC {
	static Type():TYPE {
	 	return
			TYPE.A | TYPE.B;
	}
}
