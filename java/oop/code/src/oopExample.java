class Animal {

    String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

//육식동물
interface Predator {
    String getName();
    String getMeat();
}

//초식동물
interface Herbivore {
    String getName();
    String getVegetable();
}

class Lion extends Animal implements Predator {

    //부모인 Animal 에 getName()이 이미 구현되어 있으니 여기서 따로 @Override 할 필요가 없다.

    @Override
    public String getMeat() {
        return "돼지고기";
    }
}

class Tiger extends Animal implements Predator {

    //부모인 Animal 에 getName()이 이미 구현되어 있으니 여기서 따로 @Override 할 필요가 없다.

    @Override
    public String getMeat() {
        return "소고기";
    }
}

class Rabbit extends Animal implements Herbivore {

    //부모인 Animal 에 getName()이 이미 구현되어 있으니 여기서 따로 @Override 할 필요가 없다.

    @Override
    public String getVegetable() {
        return "당근";
    }
}

class ZooKeeper {
    public void feed(Predator predator) {
        System.out.println(predator.getClass().getName() + "(" + predator.getName() + ") 먹이 " + predator.getMeat());
    }

    public void feed(Herbivore herbivore) {
        System.out.println(herbivore.getClass().getName() + "(" + herbivore.getName() + ") 먹이 " + herbivore.getVegetable());
    }
}

public class oopExample {
    public static void main(String[] args) {
        ZooKeeper zooKeeper = new ZooKeeper();

        Animal lion = new Lion();
        lion.setName("털뭉치");
        zooKeeper.feed((Predator) lion);

        Animal tiger = new Tiger();
        tiger.setName("줄무늬");
        zooKeeper.feed((Predator) tiger);


        Animal rabbit = new Rabbit();
        rabbit.setName("찹쌀이");
        zooKeeper.feed((Herbivore) rabbit);
    }
}
