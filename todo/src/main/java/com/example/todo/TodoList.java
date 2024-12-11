package com.example.todo;

import java.util.ArrayList;
import java.util.List;

public class TodoList {

    private List<String> tasks = new ArrayList<>();

    public void addTask(String task) {
        tasks.add(task);
    }

    public void listTasks() {
        if (tasks.isEmpty()) {
            System.out.println("Your todo list is empty.");
        } else {
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }

    public boolean removeTask(int taskNumber) {
        if (taskNumber < 1 || taskNumber > tasks.size()) {
            return false;
        }
        tasks.remove(taskNumber - 1);
        return true;
    }
}
