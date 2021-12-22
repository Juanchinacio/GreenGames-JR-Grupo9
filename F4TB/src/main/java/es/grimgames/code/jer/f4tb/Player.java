package es.grimgames.code.jer.f4tb;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.PrintWriter;

public class Player {

	private String name;
	private int score;
	
	public Player() {}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}
	
	public void EscribeFichero(String name, int score)
	{
	   
			name = getName();
			score = getScore();
	       
	       
	        try(
	            FileWriter fichero = new FileWriter("Ranking.txt", true);
	        	BufferedWriter bw = new BufferedWriter(fichero);
	            PrintWriter pw = new PrintWriter(fichero)) {
	            	pw.println(name);
	            	pw.println(score);
	            }
	        	catch (Exception e) {
	            System.out.println("Archivo no encontrado: " + e.getMessage());
	        	} 
	        
	    }
	}

